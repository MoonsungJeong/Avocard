const db = require("../database");

module.exports.getPocketByUserCode = (userCode) => {
    return db.query("SELECT cardList FROM pocket WHERE userCode = ?", [userCode]);
}