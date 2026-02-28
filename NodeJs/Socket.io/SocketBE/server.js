const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

// HTTP server banana zaroori hai socket.io ke liye
const server = http.createServer(app);

// Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React app
    methods: ["GET", "POST"]
  }
});

// Jab koi client connect kare
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Client se message receive karna
  socket.on("send_abcmessage", (data) => {
    console.log("Message received:", data);

    // Sab clients ko message bhejna
    io.emit("receive_message", data);
  });

  // Jab user disconnect kare
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Server start
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
