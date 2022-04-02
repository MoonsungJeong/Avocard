const mysql = require("mysql2");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "111111",
    database:"avocado"
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