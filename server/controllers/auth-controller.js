const { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendEmailVerification,
    db,
    auth
   } = require('../config/firebase-config');
const { doc, setDoc } = require("firebase/firestore");



   class FirebaseAuthController {
    registerUser(req, res) {
        const { email, password, name, cpf, address } = req.body;
        if (!email || !password) {
        return res.status(422).json({
          email: "Email necessário",
          password: "Senha necessária",
        });
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
            .then(async () => {
                const user = auth.currentUser;
                await setDoc(doc(db, "users", user.uid), {
                    name: name || "",
                    email,
                    cpf: cpf || "",
                    address: address || "",
                    uid: user.uid,
                    createdAt: new Date().toISOString()
                  });
              res.status(201).json({ message: "Verification email sent! User created successfully!" });
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({ error: "Error sending email verification" });
            });
        })
        .catch((error) => {
          const errorMessage = error.message || "An error occurred while registering user";
          res.status(500).json({ error: errorMessage });
        });
    }

    loginUser(req, res) {
        const { email, password } = req.body;
      
        if (!email || !password) {
          return res.status(422).json({
            email: "Email necessário",
            password: "Senha necessária",
          });
        }
      
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const idToken = userCredential._tokenResponse.idToken;
            if (idToken) {
              res.cookie('access_token', idToken, { httpOnly: true });
      
              res.status(200).json({
                message: "User logged in successfully",
                token: idToken,
                user: {
                  email: userCredential.user.email,
                  uid: userCredential.user.uid
                }
              });
            } else {
              res.status(500).json({ error: "Internal Server Error" });
            }
          })
          .catch((error) => {
            console.error(error);
            const errorMessage = error.message || "An error occurred while logging in";
            res.status(500).json({ error: errorMessage });
          });
      }
      
     
  }

  
  
  module.exports = new FirebaseAuthController();