const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql-57630db-yasmientosloc-3e32.e.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_6v8d-gk10RbK8A5U_na",
  database: "Act7-Tosloc",
  port: "23248"
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if(err) throw err;
    res.send("Database Connected Successfully: " + result[0]["NOW()"]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});