const db = require("../database");

module.exports.getPocketByUserCode = (userCode) => {
    return db.query("SELECT cardList FROM pocket WHERE userCode = ?", [userCode]);
}
module.exports.createNewPocket = (userCode) => {
    return db.query("INSERT into pocket (`userCode`,`cardList`) VALUES (?, '[]')", [userCode]);
}
// UPDATE `pocket` SET `cardList` = '[{\"cardCode\":112,\"cardDetail\":{\"name\":\"Lion\",\"brief\": \"I\'m SD in company Apple\",\"email\": \"sd@apple.com\",\"phone\": \"+61411122233\",\"skype\": \"app123\",\"title\":\"Senior Developer\",\"company\":\"Apple\",\"note\":\"good man\"}},{\"cardCode\":113,\"cardDetail\":{\"name\":\"Tiger\",\"brief\": \"I\'m working hard like tiger\",\"email\": \"tiger@orange.com\",\"phone\": \"+61454455566\",\"skype\": \"tiger123\",\"title\":\"Junior Developer\",\"company\":\"Orange\",\"note\":\"work well\"}}]' WHERE `pocket`.`userCode` = 1;
module.exports.updatePocket = (pocket, userCode) =>{
    return db.query(`UPDATE pocket SET cardList = ? WHERE userCode = ?`, [pocket, userCode]);
}
module.exports.updateCard = (cardDetail, cardCode) =>{
    return db.query("UPDATE card SET cardDetail = ? WHERE cardCode = ?", [cardDetail, cardCode]);
}


