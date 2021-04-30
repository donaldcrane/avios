import database from "../models";

/**
 * @class ProductServices
 * @description allows ProductServices user create and check Product details
 * @exports ProductServices
 */
export default class ProductServices {
  /**
   * @param {string} newProduct - The product details
   * @returns {object} An instance of the Products model class
   */
  static async addProduct(newProduct) {
    try {
      return await database.Products.create(newProduct);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} An instance of the Products model class
   */
  static async getAllProducts() {
    try {
      return await database.Products.findAll({
        include: [
          { model: database.Variants, as: "product_varieties" },
        ]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The Product id
   * @returns {object} An instance of the Products model class
   */
  static async getProduct(id) {
    try {
      return await database.Products.findOne({
        where: {
          id
        },
        include: [
          { model: database.Variants, as: "product_varieties" },
        ]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The Product name
   * @returns {object} An instance of the Products model class
   */
  static async deleteProduct(id) {
    try {
      const Product = await database.Products.findOne({ where: { id } });
      return await Product.destroy({ cascade: true });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The old product name
   * @param {string} Product - The new product details
   * @returns {object} An instance of the Products model class
   */
  static async updateProduct(id, Product) {
    try {
      return await database.Products.update(Product, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }
}
