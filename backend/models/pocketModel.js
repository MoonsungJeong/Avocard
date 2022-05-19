const db = require("../database");

module.exports.getPocketByUserCode = (userCode) => {
    return db.query("SELECT cardList FROM pocket WHERE userCode = ?", [userCode]);
}
module.exports.createNewPocket = (userCode) => {
    return db.query("INSERT into pocket (`userCode`,`cardList`) VALUES (?, '[]')", [userCode]);
}