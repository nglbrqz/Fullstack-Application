const User = require("../models/user");
const jwt = require("jsonwebtoken");


// THIS FILE IS RESPONSIBLE FOR HANDLING CRUD OPERATIONS

const test = (req, res) => {
  res.json("test is good :3");
};

//REGISTRATION OF ADMIN ACCOUNT
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

     if (!name) {
      return res.json({
        error: "Name is Required",
      });
    }

     if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }

     const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already been used",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//LOGIN OF ADMIN ACCOUNT
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "No user found" });
    }

    if (user.password !== password) {
      return res.json({ error: "Incorrect password" });
    }

    return res.json({ success: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
