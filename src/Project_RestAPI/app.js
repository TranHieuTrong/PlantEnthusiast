var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/AND103_Assignment", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log(">>>>>>>>>> DB Connected!!!!!!"))
//   .catch((err) => console.log(">>>>>>>>> DB Error: ", err));

mongoose
  .connect("mongodb://localhost:27017/API_PLANT")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// var registerRouter = require("./routes/register");
// var productRouter = require("./routes/product");
var categoryRouter = require("./routes/category");
var productRouter = require("./routes/product");
var billRouter = require("./routes/bill");
var adminRouter = require("./routes/admin");
var cors = require("cors");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/bill", billRouter);
app.use("/admin", adminRouter);
//CORS
app.use(cors());

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
