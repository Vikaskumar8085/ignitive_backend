const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: ["please enter your name", true],
      minLength: 6,
    },
    email: {
      type: String,
      required: ["please enter your email", true],
      minLength: 6,
    },
    password: {
      type: String,
      required: ["please enter your password", true],
      minLength: 6,
    },
    image: {
      type: String,
      required: ["please enter your Image", true],
      default: "avtar",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
