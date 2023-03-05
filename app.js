const express = require("express");
const app = express();

/* router URL */
const Router = require("./routes");
const ejsRouter = require("./routes/ejs_router.js")

/* dotenv */
require("dotenv").config();
const env = process.env;

/* ejs */
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.set("views", "./views");

/* middleware */
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(ejsRouter)

/* router */
app.use("/api", [Router]);


app.listen(env.PORT, () => {
  console.log(`${env.PORT} 포트로 실행`);
});
