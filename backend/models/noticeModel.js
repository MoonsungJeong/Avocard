const db = require("../database");

// notice deleteFlag need!!!@@@@@@#@#@#!@#!@#
module.exports.getNoticeBrief = () => {
    return db.query("SELECT noticeCode, noticeDate, noticeTitle, noticeContent FROM notice");
}