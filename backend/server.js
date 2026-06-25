// server.js
require("dotenv").config();
console.log("URI loaded:", !!process.env.MONGO_URI); // should print true
const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());
connectDB();

app.use("/api/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Server on :5000"));