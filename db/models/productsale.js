'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductSale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Sale, Product}) {
      this.belongsTo(Sale, {
        foreignKey: 'sale_id'
      });
      this.belongsTo(Product, {
        foreignKey: 'product_id'
      })
    }
  }
  ProductSale.init({
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductSale',
  });
  return ProductSale;
};