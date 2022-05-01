const cardModel = require("../models/cardModel");
const validator = require('validator');

const express = require("express");
const router = express.Router();

router.get("/card", (req, res) => {
    if(!req.session.user){
        res.status(200).json("Guest can't have card");
        return
    }
    const session_userCode = req.session.user.usercode; // session 
    cardModel.getCardByUserCode(session_userCode)
        .then((result) => {
            res.status(200).json(result);
        }) 
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
});

router.get("/card/:code", (req, res) => {
    const cardCode = validator.escape(req.params.code);
    cardModel.getCardByCardCode(cardCode)
        .then((result) => {
            res.status(200).json(result[0]);
        }) 
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
});

module.exports = router;