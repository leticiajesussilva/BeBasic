"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Clientes, { foreignKey: "cliente_id" });
      Image.belongsTo(models.Produto_estoque, {
        foreignKey: "produto_estoque_id",
      });
    }
  }
  Image.init(
    {
      url: DataTypes.STRING,
      cliente_id: DataTypes.INTEGER,
      produto_estoque_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
