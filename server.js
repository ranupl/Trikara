require("dotenv").config();
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connectDB = require("./src/db/connection");
const router = require("./src/routers/router");
const PORT = process.env.PORT || 7000;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
connectDB();

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("server is live");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
