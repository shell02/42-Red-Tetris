const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const socketIo = require('socket.io');
const { createServer } = http;
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, ".env") });
const port = process.env.PORT || 3001;
const domains = process.env.DOMAINS
  ? process.env.DOMAINS.split(",")
  : ["http://localhost:3000", 'http://localhost:8000'];

const corsOptions = {
  origin: domains,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const app = express();
const server = createServer(app);
const io = socketIo(server, {
  cors: {
    origin: domains,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "../client/build")));


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});