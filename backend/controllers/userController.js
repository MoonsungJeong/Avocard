const userModel = require("../models/userModel");
const pocketModel = require("../models/pocketModel");
const settingModel = require("../models/settingModel");
const logModel = require("../models/logModel");

const time = require("../time.js");
const bcrypt = require("bcrypt");
const validator = require("validator");
const passwordRule = {
    minLength: 8, 
    minLowercase: 1, 
    minUppercase: 1, 
    minNumbers: 1,
    minSymbols: 0
}

const express = require("express");
const router = express.Router();


router.post("/guest/login", (req,res) =>{
    res.status(200).json("Welcome Guest to Avocard!");
}); 
router.post("/user/login", (req, res) => {
    let login = req.body;

    if(!validator.isEmail(login.email) || !validator.isStrongPassword(login.password,passwordRule)){
        res.status(400).json("input is invalid");
        return;
    }

    userModel.getUserByEmail(login.email)
        .then((results) => {
            if (results.length > 0) {
                let user = results[0];

                // verify the users password
                if (bcrypt.compareSync(login.password, user.password)) {
                    // setup the session
                    req.session.user = {
                        username: user.userName,
                        usercode: user.userCode,
                        usertype: user.userType
                    }
                    logModel.createNewLog(req.socket.remoteAddress, 
                                            JSON.stringify(req.session), 
                                            "guest", 
                                            "guest", 
                                            time.currentTime(), 
                                            JSON.stringify(`{ api : '/user/login' }`));
                                            
                    res.status(200).json("login OK!");
                } else {
                    // This else case runs if the password did NOT match.
                    res.status(401).json("login failed");
                }
            }else{
                // This else case runs if the username did NOT match.
                res.status(401).json("login failed");
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json("failed to login - query error");
        })

});
router.post("/user/logout", (req, res) => {
    if(req.session.user != null){
        logModel.createNewLog(req.socket.remoteAddress, JSON.stringify(req.session), req.session.user.username, req.session.user.usertype, time.currentTime(), JSON.stringify(`{ api : '/user/logout' }`));
    }
    req.session.destroy();
    res.status(200).json("Thank you for using this app!");
});
router.post("/user/sign", (req,res) =>{
    //res.status(200).json("User created!");
    let user = req.body;
    let hashedPassword = bcrypt.hashSync(user.password, 6);

    if(!validator.isEmail(user.email) || !validator.isStrongPassword(user.password,passwordRule)){
        res.status(400).json("input is invalid");
        return;
    }

    userModel.createUser(
        validator.escape(user.email),
        validator.escape(user.username),
        hashedPassword
    )
    .then((result_1) => {
        userModel.getLastInsertUserCode()
        .then((result_2) => {
            const userCode = result_2[0]['LAST_INSERT_ID()'];
            //console.log(userCode);
            pocketModel.createNewPocket(userCode)
            .then((result_3) => {
                settingModel.createNewSetting(userCode)
                .then((result_4) => {
                    logModel.createNewLog(req.socket.remoteAddress, JSON.stringify(req.session), "guest", "guest", time.currentTime(), JSON.stringify(`{ api : '/user/sign' }`));
                    res.status(201).json("user created");
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json("query error - failed to create user");
                });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json("query error - failed to create user");
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error - failed to create user");
        });    
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json("query error - failed to create user");
    });
});
router.get("/user/info", (req, res) => {
    // User check, if it's guest send 401 status 
    if(!req.session.user){ res.status(401).json("Wrong Guest Access!"); return;}
    // If it's user start API
    const userCode = req.session.user.usercode;
    let data = {};
    userModel.getUserByUserCode(userCode)
        .then((result) => {
            data.email = result[0].email;
            data.userName = result[0].userName;
            logModel.createNewLog(req.socket.remoteAddress, JSON.stringify(req.session), req.session.user.username, req.session.user.usertype, time.currentTime(), JSON.stringify(`{ api : '/user/info' }`));
            res.status(200).json(data);
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});
router.post("/user/update", (req,res) => {
    if(!req.session.user){ res.status(401).json("Wrong Guest Access!"); return;}
    const data = req.body;
    const userCode = req.session.user.usercode;
    
    if(!validator.isStrongPassword(data.password,passwordRule)){
        res.status(400).json("input is invalid");
        return;
    }

    userModel.getPwByUserCode(userCode)
        .then((result) => {
            if(!bcrypt.compareSync(data.password, result[0].password)) {
                res.status(400).json("Wrong Password!");
                return;
            }
            let hashedPassword = bcrypt.hashSync(data.newpassword, 6);
            userModel.updatePw(hashedPassword, userCode)
                .then((result_2) => {    
                    logModel.createNewLog(req.socket.remoteAddress, JSON.stringify(req.session), req.session.user.username, req.session.user.usertype, time.currentTime(), JSON.stringify(`{ api : '/user/update' }`));
                    res.status(200).json("Password updated!");
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json("query error - failed to update password");
                })
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});
router.post("/user/delete", (req,res) => {
    if(!req.session.user){ res.status(401).json("Wrong Guest Access!"); return;}
    const data = req.body;
    const userCode = req.session.user.usercode;

    if(!validator.isStrongPassword(data.password,passwordRule)){
        res.status(400).json("input is invalid");
        return;
    }
    
    userModel.getPwByUserCode(userCode)
        .then((result) => {
            if(!bcrypt.compareSync(data.password, result[0].password)) {
                res.status(400).json("Wrong Password!");
                return;
            }
            // db delete
            userModel.deleteUser(userCode)
                .then((result) =>{
                    req.session.destroy();
                    res.status(200).json("User deleted!");
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json("query error - failed to delete accout");
                })
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});


module.exports = router;