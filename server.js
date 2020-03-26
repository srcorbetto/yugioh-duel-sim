const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/poop", (req, res) => {
  res.send("hello!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
