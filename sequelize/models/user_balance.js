'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class user_balance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_balance.init(
    {
      username: DataTypes.STRING,
      cash: DataTypes.DECIMAL,
      profit: DataTypes.DECIMAL,
      equity_value: DataTypes.DECIMAL,
      equity_cost: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: 'User_balance',
      underscored: true,
    }
  )
  return user_balance
}
