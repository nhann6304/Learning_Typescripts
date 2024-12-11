import mysql from "mysql2"


export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test_2"
})


db.getConnection((err, connection) => {
    if (err) {
        console.log("connect db mysql fail!!", err);
    }

    console.log("Connect  mysql success !!");
})