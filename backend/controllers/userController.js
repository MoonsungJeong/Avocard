const userModel = require("../models/userModel");

const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    userModel.getAllUsers()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});

module.exports = router;