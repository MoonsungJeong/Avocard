const db = require("../database");
module.exports.createNewLog = (IP, session, userName, userType, logTime, action) => {
    return db.query("INSERT INTO log (`logIp`, `session`, `userName`, `userType`, `logTime`, `action`) VALUES (?,?,?,?,?,?)", [IP, session, userName, userType, logTime, action]);
}
