const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");

//* Initializing Packages
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

//* Configs
require("./Config/db");

//* Handler
const errorHandler = require("./Handlers/Error");
const searchHandler = require("./Handlers/searchHandler");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/search", searchHandler);

//! ROUTES
const userRoute = require("./Routes/User");

app.use("/user", userRoute);

//? Common error handler
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("the app is now running in http://localhost:3000");
});
