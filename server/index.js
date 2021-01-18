const express = require("express");
const path = require("path");
const db =  require('./db/database')

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", require("./api/cats"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handling middleware
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

// listen on a port
const PORT = 3000;

const init = async function () {
  await db.sync();
  app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

module.exports = app;
