const db = require("../database");

module.exports.getCardByPocket = (arr) => {
    // To make dynamic query depend on arr.length. (?) => (?,?) => (?,?,?)
    let sql="";
    for(let i=0; i<arr.length-1; i++){
        sql += "?,";
    }
    sql += "?";
    return db.query("SELECT cardCode, cardDetail FROM card where cardCode IN ("+sql+")",arr);
}


