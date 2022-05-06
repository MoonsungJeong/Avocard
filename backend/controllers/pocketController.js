const cardModel = require("../models/cardModel");

const express = require("express");
const router = express.Router();

router.get("/pocket/:list", (req, res) => {
    const list = JSON.parse(req.params.list);
    let parameterArr = [];

    list.forEach(item => {parameterArr.push(item.code)});
    cardModel.getCardByPocket(parameterArr)
        .then((result) =>{
            for(let i=0; i < result.length; i++){
                for(let j=0; j < list.length; j++){
                    //list[i].note = pocketData[i].note;
                    if(result[i].cardCode == list[j].code){
                        result[i].note = list[j].note;
                        break;
                    }
                }
                delete result[i].cardDetail.brief;
                delete result[i].cardDetail.email;
                delete result[i].cardDetail.phone;
                delete result[i].cardDetail.skype;
            }
            res.status(200).json(result);
        })
        .catch((error => {
            console.log(error);
            res.status(500).json("query error");
        }))
});



module.exports = router;