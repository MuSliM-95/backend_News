
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path  = require("path");

const app = express();


app.use(express.json());
// app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(require("./NewsRouts"));

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("The server is started"))
  .catch(() => console.log("Server error MONGO"));

app.listen(process.env.PORT, () => {
  console.log(
    `The server is started successfully: http://localhost:${process.env.PORT}`
  );
});
