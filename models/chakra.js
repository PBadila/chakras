'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chakra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chakra.hasMany(models.Herb,{
        foreignKey: 'chakraID',
      })

      Chakra.hasMany(models.Heal,{
        foreignKey: 'chakraID',
      })

      Chakra.hasMany(models.Journal,{
        foreignKey: 'chakraID',
      })
    }
  }
  Chakra.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    age: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chakra',
  });
  return Chakra;
};