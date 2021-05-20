const express = require("express");
const app = express();
const path = require("path");
const opn = require("opn");
const url = "http://localhost:8000/";

app.use("/static", express.static("./static/"));

// viewed at http://localhost:8000
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8000);

// opn(url);
