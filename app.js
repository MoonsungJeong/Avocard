const express = require("express");

const server = express();
const port = 8080;

server.get("/", (req,res) => {
    console.log("ok");
});

// Serve static frontend resources
server.use(express.static("frontend"));

const userController = require("./backend/controllers/userController");
server.use("/api", userController);

server.listen(port, "192.168.1.223", () => {
    console.log("Backend listening on http://localhost:" + port);
});
