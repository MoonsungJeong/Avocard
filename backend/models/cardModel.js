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
    return db.query("SELECT cardCode, cardDetail FROM card WHERE cardCode = ? and deleteFlag = 0", [cardCode]);
}
/* module.exports.getCardByCardCode = (cardCode) => {
    return db.query("SELECT cardCode, cardDetail FROM card WHERE cardCode = ?", [cardCode]);
} */
module.exports.createNewCard = (userCode, cardDetail) => {
    return db.query("INSERT INTO card (`userCode`, `cardDetail`) VALUES (?,?)",[userCode,cardDetail]);
}
module.exports.updateCard = (cardDetail, cardCode) =>{
    return db.query("UPDATE card SET cardDetail = ? WHERE cardCode = ?", [cardDetail, cardCode]);
}
module.exports.deleteCard = (cardCode) => {
    return db.query("UPDATE card SET deleteFlag = 1 WHERE cardCode = ?",[cardCode]);
}
/* module.exports.deleteCard = (cardCode) => {
    return db.query("DELETE FROM `card` WHERE cardCode = ?",[cardCode]);
} */