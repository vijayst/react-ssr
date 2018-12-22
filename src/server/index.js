import express from "express";
import fs from "fs";

const app = express();

app.use(express.static('public'));
app.get("*", function(req, res) {
  fs.readFile("./src/server/index.html", "utf8", function(err, data) {
    res.send(data);
  });
});

app.listen(3000);
