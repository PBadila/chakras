'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Herb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Herb.belongsTo(models.Chakra,{
        foreignKey: 'chakraID',
      })
    }
  }
  Herb.init({
    name: DataTypes.STRING,
    chakraID: DataTypes.INTEGER,
    properties: DataTypes.STRING,
    actions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Herb',
  });
  return Herb;
};