const cardModel = require("../models/cardModel");
const settingModel = require("../models/settingModel");
const pocketModel = require("../models/pocketModel");
const userModel = require("../models/userModel");
const logModel = require("../models/logModel");

const time = require("../time.js");
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
                        
                        logModel.createNewLog(req.socket.remoteAddress, JSON.stringify(req.session), req.session.user.username, req.session.user.usertype, time.currentTime(), JSON.stringify(`{ api : '/pocket' }`));
                        res.status(200).json(data);
                    })
                })
            })
        })    
});

router.post("/pocket/update", (req,res) => {
    userModel.getUserByUserName(req.body.userName)
        .then((user) =>{
            if(!user.length){res.status(200).json("card is not existed");return;}
            let userCode = user[0].userCode;
            cardModel.getCardsByUserCode(userCode)
            .then((card) =>{
                if(!card.length){res.status(200).json("card is not existed");return;}
                // If guest, send card info to client 
                if(!req.session.user){ 
                    res.status(200).json(card[0]); 
                    return
                }
                // If loginUser, save it to pocket(DB) first
                const owner_code = req.session.user.usercode;
                // Get Requester's pocket
                pocketModel.getPocketByUserCode(owner_code)
                    .then((pocket) =>{
                        pocket[0].cardList.push(card[0]);
                        pocketModel.updatePocket(JSON.stringify(pocket[0].cardList),owner_code)
                        .then((result) =>{
                            logModel.createNewLog(req.socket.remoteAddress, JSON.stringify(req.session), req.session.user.username, req.session.user.usertype, time.currentTime(), JSON.stringify(`{ api : '/pocket/update' }`));
                            res.status(200).json(card[0]); 
                        })
                    })
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json("query error");
            })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
});
router.post("/pocket/delete", (req,res) => {
    const owner_code = req.session.user.usercode;
    const pocket = req.body.pocket;
    pocketModel.updatePocket(JSON.stringify(pocket),owner_code)
        .then((result) => {
            res.status(200).json("pocket delete");
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
})
module.exports = router;