const userModel = require("../models/userModel");
const pocketModel = require("../models/pocketModel");
const settingModel = require("../models/settingModel");
const bcrypt = require("bcrypt");
const validator = require("validator");

const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    userModel.getAllUsers()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});

router.post("/guest/login", (req,res) =>{
    res.status(200).json("Welcome Guest to Avocard!");
});

router.post("/user/sign", (req,res) =>{
    //res.status(200).json("User created!");
    let user = req.body;
    let hashedPassword = bcrypt.hashSync(user.password, 6);
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

router.post("/user/login", (req, res) => {
    let login = req.body;
    
    userModel.getUserByUsername(login.email)
        .then((results) => {
            if (results.length > 0) {
                let user = results[0];

                // verify the users password
                if (bcrypt.compareSync(login.password, user.password)) {
                    // setup the session
                    req.session.user = {
                        username: user.userName,
                        usercode: user.userCode
                    }
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

})

router.post("/user/logout", (req, res) => {
    req.session.destroy();
    res.status(200).json("Thank you for using this app!");
})

//////////////////////////////////////////////////////
router.get("/user/info", (req,res) =>{
    userModel.getAllUsers()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error => {
        console.log(error);
        res.status(500).json("query error");
    }))
})


module.exports = router;