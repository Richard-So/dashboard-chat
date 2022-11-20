'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Nzx extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nzx.init(
    {
      symbol: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: 'Nzx',
      underscored: true,
    }
  )
  return Nzx
}
