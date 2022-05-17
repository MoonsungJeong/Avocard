const db = require("../database");

module.exports.getSettingByUserCode = (userCode) => {
    return db.query("SELECT setting FROM setting WHERE userCode = ?", [userCode]);
}