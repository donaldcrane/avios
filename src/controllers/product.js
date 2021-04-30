import ProductServices from "../services/product";
import { validation, validateId } from "../validations/product";

const {
  addProduct, addCount, getAllProducts, getProduct, deleteProduct, updateProduct
} = ProductServices;

/**
 * @class ProductController
 * @description create Product, get all Products, get a Product, delete a Product, update a Product
 * @exports AdminController
 */
export default class ProductController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addProduct(req, res) {
    try {
      const { id } = req.decoded.user;
      const { name, description } = req.body;
      const { error } = validation(req.body);
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      const ProductName = name[0].toUpperCase() + name.slice(1).toLowerCase();
      const newProduct = { name: ProductName, userId: id, description };
      const createdProduct = await addProduct(newProduct);
      return res.status(201).json({ status: 201, message: "A Product has been added.", data: createdProduct, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getProducts(req, res) {
    try {
      const Products = await getAllProducts();
      res.status(200).json({
        status: 200,
        message: "Successfully retrived all Products.",
        data: Products,
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const Product = await getProduct(id);
      if (!Product) return res.status(404).json({ status: 404, error: "Product not found" });
      return res.status(200).json({
        status: 200,
        message: "Successfully retrived Product.",
        data: Product,
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: "Resource not found."
      });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const Product = await getProduct(id);
      if (!Product) return res.status(404).json({ status: 404, error: "Product not found." });
      await deleteProduct(id);
      return res.status(200).json({
        status: 200,
        message: "Successfully Deleted Product.",
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: "Resource not found.",
      });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const { name, description } = req.body;
      const Product = await Admin.getProduct(id);
      if (!Product) return res.status(404).json({ status: 404, error: "Product not found." });
      let newname;
      if (name) {
        newname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        req.body.name = newname;
      }
      const newProduct = await updateProduct(id, req.body);
      return res.status(200).json({
        status: 200,
        message: "Successfully updated Product.",
        data: newProduct[1],
      });
    } catch (error) {
      return res.status(404).json({ status: 404, error: "Resource not found.", });
    }
  }
}
