const express = require("express");
const session = require("express-session");

const bodyParser = require('body-parser')

const limit = require("./backend/msRateLimit");
const block = require("./backend/blockCSRF");

const init = require("./init.js");

const server = express();

server.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Enable middleware for body-parser
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

// Create Session
server.use(session({
    secret: "secret phrase abc123",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

// CSRF block Middleware
// hostURL can be changed depend on server environment
const hostURL = init.CSRF.hostURL;
const blocker = block.blockCSRF(hostURL);
server.use(blocker);

// Serve static frontend resources
server.use(express.static("frontend"));

// Too fast request block Middleware
const limiter =limit.msRateLimit({
    maxCount: 500,
    resetTime: 24*60*60*1000 , // 24 hrs = 24*60*60*1000 
    resetMessage: "Wait 24 hours for next request",
    timePerOneClick: 500, // 1000 miliseconds = 1 second
    timeMessage: "Too fast request"
}) 

const adminController = require("./backend/controllers/adminController");
server.use("/api", adminController);

server.use(limiter);

const userController = require("./backend/controllers/userController");
server.use("/api", userController);

const pocketController = require("./backend/controllers/pocketController");
server.use("/api", pocketController);

const cardController = require("./backend/controllers/cardController");
server.use("/api", cardController);

const noticeController = require("./backend/controllers/noticeController");
server.use("/api", noticeController);


server.get('/*', (req, res) => {
    res.redirect('/')
}) 

server.listen(init.connect.port, init.connect.hostname, () => {
    console.log("Backend listening on http://"+"avocard.app");
}); 
 