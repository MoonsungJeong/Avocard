const db = require("../database");

module.exports.getAllUsers = () => {
    return db.query("SELECT userID, firstName, lastName, email, username, accessRights FROM users WHERE deleteFlag = 0");
}

