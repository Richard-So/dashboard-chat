'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'trade_activities',
      [
        {
          username: 'admin',
          symbol: 'AIR',
          quantity: 100,
          amount: 1000,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'trade_activities',
      [
        {
          username: 'admin',
          symbol: 'AIR',
          quantity: 100,
          amount: 1000,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },
}
