'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Denomination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      this.hasMany(Product, {
        foreignKey: 'denomination_id'
      })
    }
  }
  Denomination.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Denomination',
  });
  return Denomination;
};