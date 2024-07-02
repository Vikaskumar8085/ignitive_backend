const mongoose = require("mongoose");

const CurdSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: ["please enter your title", true],
    },
    duedate: {
      type: Date,
      required: true,
      default: new Date(),
    },
    attachment: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Curd = mongoose.model("Curd", CurdSchema);
module.exports = Curd;
