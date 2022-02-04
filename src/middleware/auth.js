const jwt = require("jsonwebtoken");

const veryfyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      console.log({decodedData});
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    next(error)
  }
};
const isModerador = async (req, res, next) => {
  next();
};
const isAdmin = async (req, res, next) => {
  next();
};

module.exports = { veryfyToken, isModerador, isAdmin };
