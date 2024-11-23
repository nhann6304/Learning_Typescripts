import mysql from "mysql2"


export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test_2"
})


db.getConnection((err, connection) => {
    if (err) {
        console.log("connect db fail!!", err);
    }

    console.log("Connect db success !!");
})