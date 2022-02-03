require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const DB_NAME = process.env.DB_NAME || "henryhome";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgre";


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  native: false,
  logging: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Facilities, Housing , Location, Order, Reservations, Services, UserAdmin, UserClient, UserMod  } = sequelize.models;

//relaciones
Housing.belongsToMany(Facilities,{through: "Housing_Facilities"})
Facilities.belongsToMany(Housing,{through: "Housing_Facilities"})

Housing.belongsToMany(Services,{through: "Housing_Services"})
Services.belongsToMany(Housing,{through: "Housing_Services"})

Location.hasMany(Housing);
Housing.belongsTo(Location);

Order.hasOne(Reservations);
Reservations.belongsTo(Order);

UserMod.hasMany(Housing)
Housing.belongsTo(UserMod)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
