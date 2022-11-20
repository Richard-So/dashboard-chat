'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  portfolio.init(
    {
      username: DataTypes.STRING,
      symbol: DataTypes.STRING,
      quantity: DataTypes.NUMBER,
      unit_cost: DataTypes.DECIMAL,
      total_cost: DataTypes.DECIMAL,
      market_price: DataTypes.DECIMAL,
      market_value: DataTypes.DECIMAL,
      gain_loss: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: 'Portfolio',
      underscored: true,
    }
  )
  return portfolio
}
