import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "blog",
});

db.connect((err) => {
    if (err) console.log(err);
    else console.log("db connected");
});

export default db
