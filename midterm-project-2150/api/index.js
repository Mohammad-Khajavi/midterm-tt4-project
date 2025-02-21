const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.listen(process.env.API_PORT, () => {
  console.log(`The server is running, PORT: ${process.env.API_PORT}`);
});