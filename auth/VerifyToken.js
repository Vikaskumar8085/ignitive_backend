const jwt = require("jsonwebtoken");

const verifytoken = async (req, res, next) => {
  try {
    const authtoken = await req.headers.authorization.replace(/^Bearer\s/, "");
    console.log(authtoken);

    const decode = await jwt.verify(authtoken, "secret");
    console.log(decode);
    req.user = decode.id;
    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = verifytoken;
