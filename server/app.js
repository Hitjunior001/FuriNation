// server.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const http = require('http'); 
const socketSetup = require('./config/socketio');

const app = express();
const server = http.createServer(app); 
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const router = require("./routes");
app.use(router);

socketSetup(server);

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
