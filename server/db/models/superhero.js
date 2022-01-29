'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhero.init({
    nickname: DataTypes.STRING,
    real_name: DataTypes.STRING,
    origin_description: DataTypes.STRING,
    superpowers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    catch_phrase: DataTypes.STRING,
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
  }, {
    sequelize,
    modelName: 'Superhero',
  });
  return Superhero;
};