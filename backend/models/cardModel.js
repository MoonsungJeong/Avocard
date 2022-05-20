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
module.exports.createNewCard = (userCode, cardDetail) => {
    return db.query("INSERT INTO card (`userCode`, `cardDetail`) VALUES (?,?)",[userCode,cardDetail]);
}
// UPDATE `card` SET `cardDetail` = '{\"name\": \"Eagle\", \"brief\": \"This is short explaination\", \"email\": \"Email\", \"phone\": \"Phone Number\", \"skype\": \"Skype\", \"title\": \"Title\", \"company\": \"Company\"}' WHERE `card`.`cardCode` = 117;
module.exports.updateCard = (cardDetail, cardCode) =>{
    return db.query("UPDATE card SET cardDetail = ? WHERE cardCode = ?", [cardDetail, cardCode]);
}