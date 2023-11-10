const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const connectDB = require("./config/dbConn");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

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

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    const userData = await User.create({
      name,
      email,
      password: hashedPwd,
    });
    res.json(userData);
  } catch (err) {
    res.status(422).json(err);
  }
});

app.post("/user", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      let token = jwt.sign(
        { email: userDoc.email, _id: userDoc._id, name: userDoc.name },
        process.env.JWTSECRET
      );
      res.cookie("auth-token", token).json(userDoc);
    } else {
      return res
        .status(401)
        .send({ auth: false, message: "Incorrect password" });
    }
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (error, userData) => {
      if (error) throw error;

      const userDoc = await User.findById(userData.id)
        .select("-password")
        .lean();
      res.json(userDoc);
    });
  } else {
    res.json(null);
  }
});

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT} `);
  } catch (error) {
    console.log(`Error is ${error}`);
  }
});
