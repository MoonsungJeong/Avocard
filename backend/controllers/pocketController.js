const cardModel = require("../models/cardModel");
const settingModel = require("../models/settingModel");
const pocketModel = require("../models/pocketModel");
const userModel = require("../models/userModel");

const express = require("express");
const router = express.Router();

router.get("/pocket", (req, res) => {
    const userCode = req.session.user.usercode;
    let data = {};
    pocketModel.getPocketByUserCode(userCode)
        .then((pocket) => {
            settingModel.getSettingByUserCode(userCode)
            .then((setting) => {
                cardModel.getCardsByUserCode(userCode)
                .then((card) => {
                    userModel.getUserByUserCode(userCode)
                    .then((user) =>{
                        data.userPocket = pocket[0].cardList;
                        data.userSetting = setting[0].setting;
                        data.myCard = card;
                        data.userType = user[0].userType;
                        res.status(200).json(data);
                    })
                })
            })
        })
    
    

    
});

module.exports = router;