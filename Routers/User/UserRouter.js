const express = require("express");
const {
  LoginCtr,
  RegisterCtr,
  GetUserCtr,
} = require("../../controller/userCtr");
const verifytoken = require("../../auth/VerifyToken");
const upload = require("../../utils/fileupload");
const {
  registervalidation,
  loginvalidation,
} = require("../../validation/authValidation");
const validator = require("express-joi-validation").createValidator({});

const userRouter = express.Router();

userRouter.post("/login", validator.body(loginvalidation), LoginCtr);
userRouter.post(
  "/register",
  validator.fields(registervalidation),
  upload.single("image"),
  RegisterCtr
);
userRouter.get("/get-user", verifytoken, GetUserCtr);

module.exports = userRouter;
