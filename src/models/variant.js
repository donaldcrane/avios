const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Variant = sequelize.define("Variants",{  
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Variant.associate = models => {
    Variant.belongsTo(models.Products, {
      as: "product_variants",
      foreignKey: "productId",
    });
  };
  return Variant;
};
