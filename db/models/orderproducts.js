const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Order }) {
      this.belongsTo(Order, {
        foreignKey: 'order_id',
      });
      this.belongsTo(Product, {
        foreignKey: 'product_id',
      });
    }
  }
  OrderProducts.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderProducts',
  });
  return OrderProducts;
};
