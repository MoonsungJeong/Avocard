const userModel = require("../models/userModel");

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
    // @@ guest login @@
    // log create
    // res send 200
    res.status(200).json("Welcome Guest to Avocard!");
});
module.exports = router;