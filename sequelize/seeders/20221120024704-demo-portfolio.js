'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'portfolios',
      [
        {
          username: 'admin',
          symbol: 'AIR',
          quantity: 3.56,
          unit_cost: 59.32,
          total_cost: 211.23,
          market_price: 25.72,
          market_value: 91.59,
          gain_loss: -119.64,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'portfolios',
      [
        {
          username: 'admin',
          symbol: 'AIR',
          quantity: 3.56,
          unit_cost: 59.32,
          total_cost: 211.23,
          market_price: 25.72,
          market_value: 91.59,
          gain_loss: -119.64,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },
}
