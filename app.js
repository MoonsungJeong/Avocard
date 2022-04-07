const express = require("express");
const session = require("express-session");
const limit = require("./backend/msRateLimit");

const server = express();
const port = 8080;

server.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use(session({
    secret: "secret phrase abc123",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

// Serve static frontend resources
server.use(express.static("frontend"));

const limiter =limit.msRateLimit({
    maxCount: 1000,
    resetTime: 24*60*60*1000 , // 24 hrs = 24*60*60*1000 
    resetMessage: "Wait 1 min for next request",
    timePerOneClick: 1000, // 1000 miliseconds = 1 second
    timeMessage: "Too fast request"
}) 
server.use(limiter);

const userController = require("./backend/controllers/userController");
server.use("/api", userController);

const pocketController = require("./backend/controllers/pocketController");
server.use("/api", pocketController);

const cardController = require("./backend/controllers/cardController");
server.use("/api", cardController);

const noticeController = require("./backend/controllers/noticeController");
server.use("/api", noticeController);

server.listen(port, "localhost", () => {
    console.log("Backend listening on http://localhost:" + port);
}); 
 