module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Denominations', [{
      name: ' Обезболивающе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Витамины и добавки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'БОЛЕЗНИ СУСТАВОВ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'ОФТАЛЬМОЛОГИЧЕСКИЕ СРЕДСТВА',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Подгузники детские',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Товары для диабетиков',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'МЕДИЦИНСКИЕ ПРИБОРЫ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Лекарства от ОРВИ и гриппа',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Denominations', null, {});
  },
};
