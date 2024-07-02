const express = require("express");
const userRouter = require("./User/UserRouter");
const curdRouter = require("./Curd/CurdRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/curd", curdRouter);

module.exports = router;
