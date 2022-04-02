const express = require("express");

const server = express();
const port = 8080;

// Serve static frontend resources
server.use(express.static("frontend"));

const userController = require("./backend/controllers/userController");
server.use("/api", userController);

const pocketController = require("./backend/controllers/pocketController");
server.use("/api", pocketController);

const cardController = require("./backend/controllers/cardController");
server.use("/api", cardController);

const noticeController = require("./backend/controllers/noticeController");
server.use("/api", noticeController);

server.listen(port, "192.168.1.223", () => {
    console.log("Backend listening on http://localhost:" + port);
}); 
