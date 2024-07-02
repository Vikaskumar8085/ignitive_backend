const mongoose = require("mongoose");
require("dotenv").config();

(async function () {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://vikasinfosense:iYzdnYINwqRecxNJ@TaskDb.eslqsy0.mongodb.net/",
      {
        useNewUrlParser: true,
      }
    );
    if (db) {
      console.log("db coonnected");
    } else {
      console.log("db Not connected");
    }
  } catch (error) {
    console.error(error.message);
  }
})();
