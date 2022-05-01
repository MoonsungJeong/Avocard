const db = require("../database");

// notice deleteFlag need!!!@@@@@@#@#@#!@#!@#
module.exports.getNoticeBrief = () => {
    return db.query("SELECT noticeCode, noticeDate, noticeTitle, noticeContent FROM notice");
}

module.exports.getNoticeContent = () => {
    return db.query("SELECT cardCode, cardDetail FROM card WHERE userCode = ? and deleteFlag = 0", [userCode]);
}