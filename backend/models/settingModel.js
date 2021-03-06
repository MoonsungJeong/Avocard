const db = require("../database");

module.exports.getSettingByUserCode = (userCode) => {
    return db.query("SELECT setting FROM setting WHERE userCode = ?", [userCode]);
}

module.exports.createNewSetting = (userCode) => {
    return db.query("INSERT into setting (`userCode`,`setting`) VALUES (?, '{\"theme\": \"light\"}')", [userCode]);
}