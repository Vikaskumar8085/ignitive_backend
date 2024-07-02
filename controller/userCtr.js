const AsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const LoginCtr = AsyncHandler(async (req, res) => {
  try {
    const existUser = await User.findOne({
      email: req.body.email,
    });
    if (!existUser) {
      return res.status(400).json("User Name and Password inCorrent !");
    }
    const comparePass = await bcrypt.compare(
      req.body.password,
      existUser?.password
    );
    console.log(comparePass);
    if (!comparePass) {
      return res.status(400).json("User Name and Password inCorrent !");
    }

    const token = await jwt.sign({ id: existUser._id }, "secret", {
      expiresIn: "1d",
    });

    if (token) {
      return res.status(200).json(token);
    }
  } catch (error) {
    return res.status(500).json(error.message);
    // throw new Error(error.message)
  }
});

// Register Ctr
const RegisterCtr = AsyncHandler(async (req, res) => {
  try {
    // encrypt password
    const gen = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(req.body.password, gen);
    req.body.password = hashpass;
    // encrypt password
    const filename = req.file.filename;
    req.body.image = filename;
    const registerdata = await User(req.body);
    if (registerdata) {
      await registerdata.save();
      return res.status(201).json("data register succesfully");
    } else {
      res.status(400);
      throw new Error("Something Error");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// get user ctr

const GetUserCtr = AsyncHandler(async (req, res) => {
  try {
    const userdata = await User.findById({ _id: req.user });
    if (userdata) {
      return res.status(200).json(userdata);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = {
  LoginCtr,
  RegisterCtr,
  GetUserCtr,
};
