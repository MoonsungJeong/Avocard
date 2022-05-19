const db = require("../database");

// To make dynamic query depend on arr.length. (?) => (?,?) => (?,?,?)
module.exports.getCardByPocket = (arr) => {
    let sql="";
    for(let i=0; i<arr.length-1; i++){
        sql += "?,";
    }
    sql += "?";
    return db.query("SELECT cardCode, cardDetail FROM card WHERE cardCode IN ("+sql+")",arr);
}
module.exports.getCardsByUserCode = (userCode) => {
    return db.query("SELECT cardCode, cardDetail FROM card WHERE userCode = ? and deleteFlag = 0", [userCode]);
}
module.exports.getCardByCardCode = (cardCode) => {
    return db.query("SELECT cardCode, cardDetail FROM card WHERE cardCode = ?", [cardCode]);
}