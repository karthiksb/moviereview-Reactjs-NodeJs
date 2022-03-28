var express = require("express");
var mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
var con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "db",
});

con.connect((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("connected db");
  }
});

app.post("/create", (req, res) => {
  console.log("req");
  var movie = req.body.movie;
  var review = req.body.review;

  console.log(movie);

  con.query(
    "insert into movies(movie, review) values(?,?)",
    [movie, review],
    (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("insert successfully");
      }
    }
  );
});

app.listen(5000, () => {
  console.log("server running");
});
