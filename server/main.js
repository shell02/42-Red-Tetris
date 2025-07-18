const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const {Server} = require('socket.io');

const port = 3001;
const domains = ["http://localhost:3000"];
const corsOptions = {
  origin: domains,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const app = express();
const server = http.createServer(app);
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "../client/build")));

const io = new Server(server, { cors: corsOptions });

io.on("connection", (socket) => {
  console.log("Client connecté :", socket.id);

  socket.on("ping-server", () => {
    console.log("Ping : " + socket.id);
    socket.emit("pong-client");
  });

  socket.on("disconnect", () => {
    console.log("Client déconnecté :", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});