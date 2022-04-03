const db = require("../database");

module.exports.getAllUsers = () => {
    return db.query("SELECT * FROM user WHERE deleteFlag = 0");
}

//@@@@@
module.exports.createUser = (email, username, password) => {
    return db.query("INSERT INTO `user` (email, username, password) " +
        "VALUES (?,?,?)", [email, username, password]);
}

module.exports.getUserByUsername = (username) => {
    return db.query("SELECT * FROM user WHERE userName = ? and deleteFlag = 0",[username]);
}
