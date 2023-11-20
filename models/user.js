"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      sex: DataTypes.ENUM({
        values: ["Laki-laki", "Perempuan"],
      }),
    },
    {
      sequelize,
      modelName: "User",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};