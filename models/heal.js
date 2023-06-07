'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Heal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Heal.belongsTo(models.Chakra,{
        foreignKey: 'chakraID'
      })
    }
  }
  Heal.init({
    activity: DataTypes.STRING,
    chakraID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Heal',
  });
  return Heal;
};