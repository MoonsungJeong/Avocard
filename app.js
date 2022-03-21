const express = require("express");

const server = express();
const port = 8080;

server.listen(port, "192.168.1.223", () => {
    console.log("Backend listening on http://localhost:" + port);
});

server.get("/", (req,res) => {
    console.log("ok");
});