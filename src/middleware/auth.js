const veryfyToken = async (req, res, next) => {
  next();
};
const isModerador = async (req, res, next) => {
  next();
};
const isAdmin = async (req, res, next) => {
  next();
};

module.exports={veryfyToken,isModerador,isAdmin}