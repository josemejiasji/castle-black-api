const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/router.js");
const api = require("./src/api.js");

const app = express();

app.disable("x-powered-by"); // QUESTION: any reason is this line here?
// ANSWER: it is usually removed for security reasons. You remove this header to prevent malicious users from trying out public-known bugs of Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);
app.use("/api", api);

module.exports = app;
