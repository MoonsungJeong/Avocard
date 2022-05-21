const db = require("../database");

module.exports.getAllUsers = () => {
    return db.query("SELECT * FROM user WHERE deleteFlag = 0");
}
module.exports.getPwByUserCode = (userCode) => {
    return db.query("SELECT password FROM `user` WHERE userCode = ? and deleteFlag = 0",[userCode]);
}
module.exports.getUserByUserCode = (userCode) =>{
    return db.query("SELECT * FROM `user` WHERE userCode = ? and deleteFlag = 0",[userCode]);
}
module.exports.createUser = (email, username, password) => {
    return db.query("INSERT INTO `user` (email, username, password) " +
        "VALUES (?,?,?)", [email, username, password]);
}
module.exports.updatePw = (password, userCode) => {
    return db.query("UPDATE `user` SET password = ? WHERE userCode = ?", [password, userCode]);
}
module.exports.deleteUser = (userCode) => {
    return db.query("UPDATE `user` SET deleteFlag = 1 WHERE userCode = ?", [userCode]);
}
module.exports.getLastInsertUserCode = () =>{
    return db.query("SELECT LAST_INSERT_ID()");
}
module.exports.getUserByEmail = (username) => {
    return db.query("SELECT * FROM `user` WHERE email = ? and deleteFlag = 0",[username]);
}
