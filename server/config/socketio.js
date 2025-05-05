const socketIo = require('socket.io');

module.exports = function (server) {
    const users = {}; 

    const io = socketIo(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            allowedHeaders: ["Content-Type"],
            credentials: true
        }
    });

    io.on('connection', (socket) => {
        console.log('Usuário conectado: ' + socket.id);

        socket.on('register', (email) => {
            users[email] = socket.id;
            console.log(`Usuário registrado: ${email}`);
        });

        socket.on('sendMessage', (message) => {
            io.emit('receiveMessage', message);
        });
        socket.on('disconnect', () => {
            console.log('Usuário desconectado: ' + socket.id);

        });
    });

    console.log("Socket.io ligado");
};
