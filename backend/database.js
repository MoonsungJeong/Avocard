const mysql = require("mysql2");
const init = require("../init.js");

const connection = mysql.createPool({
    host: init.db.host,
    user: init.db.user,
    password: init.db.password,
    database:init.db.database
});

function query(sql, parameters) {
    return new Promise((resolve, reject) => {
        connection.query(sql, parameters, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

module.exports = {
    query
}