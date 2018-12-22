import express from "express";
import fs from "fs";
import renderer from './renderer';

const app = express();

app.use(express.static('public'));
app.get("*", function(req, res) {
  fs.readFile("./src/server/index.html", "utf8", function(err, data) {
    const context = {};
    const html = renderer(data, req.path, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(html);
  });
});

app.listen(3000);
