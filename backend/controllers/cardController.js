const cardModel = require("../models/cardModel");
const validator = require('validator');

const express = require("express");
const router = express.Router();

router.get("/card", (req, res) => {
    if(!req.session.user){
        res.status(200).json("Guest can't have card");
        return;
    }
    const userCode = req.session.user.usercode; // session 
    cardModel.getCardsByUserCode(userCode)
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

router.post("/card/create", (req,res) => {
    if(!req.session.user){
        res.status(200).json("Guest can't create card");
        return;
    }
    const userCode = req.session.user.usercode.toString(); // session
    const cardDetail = JSON.stringify(req.body);
    cardModel.getCardsByUserCode(userCode)
        .then((result) => {
            // card already exist
            if(result.length){
                res.status(200).json("card is already existed");
                return;
            }
            // card create
            cardModel.createNewCard(
                validator.escape(userCode),
                cardDetail
            )
                .then((result_2) => {
                    res.status(201).json("card created");
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json("query error - failed to create card");
                });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
});


router.post("/card/update", (req,res) =>{
    if(!req.session.user){
        res.status(200).json("Guest can't update card");
        return;
    }
    const userCode = req.session.user.usercode;
    const cardCode = req.body.cardCode;
    const cardDetail = JSON.stringify(req.body.cardDetail);
    cardModel.getCardsByUserCode(userCode)
        .then((result) =>{
            if(cardCode != result[0].cardCode){
                res.status(400).json("Manipulated data");
                return;
            }
            cardModel.updateCard(
                cardDetail,
                validator.escape(cardCode)
            )
                .then((result_2) => {
                    res.status(200).json("Avocard updated!");
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json("query error - failed to update card");
                });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
});

module.exports = router;