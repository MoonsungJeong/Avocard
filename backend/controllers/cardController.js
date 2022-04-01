const cardModel = require("../models/cardModel");

const express = require("express");
const router = express.Router();

router.get("/card", (req, res) => {
    const session_userCode = 1;
    cardModel.getCardByUserCode(session_userCode)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
});

module.exports = router;