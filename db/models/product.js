const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Denomination, ProductSale, OrderProducts }) {
      this.belongsTo(Denomination, {
        foreignKey: 'denomination_id',
      });
      this.hasMany(ProductSale, {
        foreignKey: 'product_id',
      });
      this.hasMany(OrderProducts, {
        foreignKey: 'product_id',
      });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    quanity: DataTypes.INTEGER,
    denomination_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
