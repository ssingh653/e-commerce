const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const connectDB = require("./config/dbConn");

require("dotenv").config();
connectDB();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.get("/", (req, res) => {
  res.json("test ok");
});

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT} `);
  } catch (error) {
    console.log(`Error is ${error}`);
  }
});
