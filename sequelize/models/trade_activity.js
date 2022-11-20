'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class trade_activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trade_activity.init(
    {
      username: DataTypes.STRING,
      symbol: DataTypes.STRING,
      quantity: DataTypes.NUMBER,
      amount: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Trade_activity',
      underscored: true,
    }
  )
  return trade_activity
}
