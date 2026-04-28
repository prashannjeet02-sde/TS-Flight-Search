'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.City, {
        foreignKey: "airport_city_id",
        as:"cities"
      })
    }
  }
  Airport.init({
    airport_name: { type: DataTypes.STRING, allowNull: false },
    airport_city_id: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};