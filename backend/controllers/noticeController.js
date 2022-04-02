const noticeModel = require("../models/noticeModel");

const express = require("express");
const router = express.Router();

router.get("/notice", (req, res) => {
    noticeModel.getNoticeBrief()
        .then((result) => {
            res.status(200).json(result);
        }) 
        .catch((error) => {
            console.log(error);
            res.status(500).json("query error");
        })
});

module.exports = router;