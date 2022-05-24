const userModel = require("../models/userModel");

const express = require("express");
const router = express.Router();

// Allowed IP
const whiteList = [
    "192.168.35.11"
]
router.get("/admin/users", (req, res) => {
    if(req.session.user.usertype !== 'admin'){ res.status(401).json("Wrong Access!"); return;}
    // Check IP address of req and Allowed IP
    // If it's same, go to next process
    if(whiteList.includes(req.socket.remoteAddress)){
        userModel.getAllUsers()
            .then((result) =>{
                res.status(200).json(result);
            })
            .catch((error => {
                console.log(error);
                res.status(500).json("query error");
            }))
    }else{
        // If it's different, response 401 status code
        res.status(401).json("wrong IP access");
    }
});
router.post("/admin/user/active", (req,res) => {
    if(req.session.user.usertype !== 'admin'){ res.status(401).json("Wrong Access!"); return;}
    const userCode = req.body.userCode;

    userModel.activateUser(userCode)
        .then((result) =>{
            res.status(200).json("activated");
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});
router.post("/admin/user/deactive", (req,res) => {
    if(req.session.user.usertype !== 'admin'){ res.status(401).json("Wrong Access!"); return;}
    const userCode = req.body.userCode;
    
    userModel.deleteUser(userCode)
        .then((result) =>{
            res.status(200).json("deactivated");
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});

module.exports = router;