const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "userMod",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique:true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.STRING,
        allowNull: false,
        defaulValue: "Moderator",
      },
      houses: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    { timestamps: false }
  );
};
