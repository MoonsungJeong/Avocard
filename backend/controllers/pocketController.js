const cardModel = require("../models/cardModel");
const settingModel = require("../models/settingModel");
const pocketModel = require("../models/pocketModel");

const express = require("express");
const router = express.Router();

router.get("/pocket", (req, res) => {
    const userCode = req.session.user.usercode;
    let pocket = {};
    pocketModel.getPocketByUserCode(userCode)
        .then((arr) => {
            settingModel.getSettingByUserCode(userCode)
            .then((setting) => {
                cardModel.getCardsByUserCode(userCode)
                .then((card) => {
                    pocket.userPocket = arr[0].cardList;
                    pocket.userSetting = setting[0].setting;
                    pocket.myCard = card;
                    res.status(200).json(pocket);
                })
            })
        })
    
    

    
});

module.exports = router;