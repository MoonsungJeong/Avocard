const db = require("../database");

module.exports.getPocketByUserCode = (userCode) => {
    return db.query("SELECT cardList FROM pocket WHERE userCode = ?", [userCode]);
}
module.exports.createNewPocket = (userCode) => {
    return db.query("INSERT into pocket (`userCode`,`cardList`) VALUES (?, '[]')", [userCode]);
}
module.exports.updatePocket = (pocket, userCode) =>{
    return db.query(`UPDATE pocket SET cardList = ? WHERE userCode = ?`, [pocket, userCode]);
}
module.exports.updateCard = (cardDetail, cardCode) =>{
    return db.query("UPDATE card SET cardDetail = ? WHERE cardCode = ?", [cardDetail, cardCode]);
}


