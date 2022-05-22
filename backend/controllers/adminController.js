const userModel = require("../models/userModel");

const express = require("express");
const router = express.Router();

router.get("/admin/users", (req, res) => {
    if(req.session.user.usertype !== 'admin'){ res.status(401).json("Wrong Access!"); return;}
    
    userModel.getAllUsers()
        .then((result) =>{
            res.status(200).json(result);
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
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