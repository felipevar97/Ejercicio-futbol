const express = require("express");
const cors = require("cors");
const logger = require("morgan");
// Controllers
const renderController = require("./controllers/renderController");
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(renderController);

module.exports = app;
