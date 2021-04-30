const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Products",{  
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Product.associate = models => {
    Product.belongsTo(models.Users, {
        as: "user product",
        foreignKey: "userId",
    });
    Product.hasMany(models.Variants, {
      as: "product_varieties",
      foreignKey: "productId",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return Product;
};
