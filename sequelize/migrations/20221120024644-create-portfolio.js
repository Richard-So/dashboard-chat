'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('portfolios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      symbol: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.NUMBER,
      },
      unit_cost: {
        type: Sequelize.DECIMAL,
      },
      total_cost: {
        type: Sequelize.DECIMAL,
      },
      market_price: {
        type: Sequelize.DECIMAL,
      },
      market_value: {
        type: Sequelize.DECIMAL,
      },
      gain_loss: {
        type: Sequelize.DECIMAL,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('portfolios')
  },
}
