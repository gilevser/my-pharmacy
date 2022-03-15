module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      title: 'Нурафен',
      price: 238,
      description: 'Мягкие овальные капсулы с красной полупрозрачной желатиновой оболочкой, с идентифицирующей надписью белого цвета NUROFEN, содержащие прозрачную жидкость от бесцветного до светло-розового цвета. ',
      img: 'тута',
      quanity: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
