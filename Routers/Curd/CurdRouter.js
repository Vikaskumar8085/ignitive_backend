const express = require("express");
const {
  GetallTask,
  AddTask,
  DeleteTask,
  GetsingleTask,
  UpdateTask,
} = require("../../controller/curdCtr");
const verifytoken = require("../../auth/VerifyToken");
const validatore = require("express-joi-validation").createValidator({});
const upload = require("../../utils/fileupload");
const addItemvalidate = require("../../validation/curdValidation");

const curdRouter = express.Router();
curdRouter.use(verifytoken);
curdRouter.get("/get-all-task", GetallTask);
curdRouter.post("/add-task", upload.single("Pdffiles"), AddTask);
curdRouter.get("/get-single-task/:id", GetsingleTask);
curdRouter.delete("/del-task/:id", DeleteTask);
curdRouter.put("/update-task/:id", upload.single("Pdffiles"), UpdateTask);

module.exports = curdRouter;
