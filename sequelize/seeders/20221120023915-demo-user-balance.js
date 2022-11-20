'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user_balances',
      [
        {
          username: 'admin',
          cash: 10000,
          profit: 0,
          equity_value: 0,
          equity_cost: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'user_balances',
      [
        {
          username: 'admin',
          cash: 10000,
          profit: 0,
          equity_value: 0,
          equity_cost: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },
}
