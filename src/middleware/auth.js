const jwt = require("jsonwebtoken");
const { UserAdmin, UserClient, UserMod } = require("../db");
const veryfyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log("TOKEEEEN:", token)
    console.log("NOSEEEEE:",req.headers)
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
  try{
  const modID = req.userId
  console.log(req.userId)
  const Mod = await UserMod.findOne({where:{id:modID}})
    console.log(Mod)
    console.log("USERID",req.userId)
    if(Mod){
      console.log("YAAAAS");next();}else{return res.status(403).json({message:"You are not a Moderator"})}
  
  
  }catch(error){next(error)}
  
};
const isAdmin = async (req, res, next) => {
  try{
    const adminID = req.userId
    console.log(req.userId)
    const Admin = await UserAdmin.findOne({where:{id:adminID}})
      console.log(adminID)
      
      if(Admin){
        console.log("YAAAAS");next();}else{return res.status(403).json({message:"You are not a Admin"})}
    
    
    }catch(error){next(error)}
  next();
};

module.exports = { veryfyToken, isModerador, isAdmin };
