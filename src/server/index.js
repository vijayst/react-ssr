import express from "express";
import fs from "fs";
import renderer from './renderer';

const app = express();

app.use(express.static('public'));
app.get("*", function(req, res) {
  fs.readFile("./src/server/index.html", "utf8", function(err, data) {
    const html = renderer(data);
    res.send(html);
  });
});

app.listen(3000);
