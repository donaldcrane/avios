import VariantServices from "../services/variant";
import { validation, validateId } from "../validations/variant";

const {
  addVariant, getAllVariants, getVariant, deleteVariant, updateVariant, updateImage
} = VariantServices;

/**
 * @class VariantController
 * @description create Variant, get all Variants, get a Variant, delete a Variant, update a Variant
 * @exports AdminController
 */
export default class VariantController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addVariant(req, res) {
    try {
      const { productId } = req.params;
      const {
        size, color, quantity, price
      } = req.body;
      const { error } = validation(req.body);
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      const newVariant = {
        productId, size, color, quantity, price
      };
      const createdVariant = await addVariant(newVariant);
      return res.status(201).json({ status: 201, message: "A Variant has been added.", data: createdVariant, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getVariants(req, res) {
    try {
      const Variants = await getAllVariants();
      res.status(200).json({
        status: 200,
        message: "Successfully retrived all Variants.",
        data: Variants,
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
  static async getVariantById(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const Variant = await getVariant(id);
      if (!Variant) return res.status(404).json({ status: 404, error: "Variant not found" });
      return res.status(200).json({
        status: 200,
        message: "Successfully retrived Variant.",
        data: Variant,
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
  static async deleteVariant(req, res) {
    const { id } = req.params;
    try {
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const Variant = await getVariant(id);
      if (!Variant) return res.status(404).json({ status: 404, error: "Variant not found." });
      await deleteVariant(id);
      return res.status(200).json({
        status: 200,
        message: "Successfully Deleted Variant.",
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
  static async updateVariant(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const {
        size, color, quantity, price
      } = req.body;
      const Variant = await getVariant(id);
      if (!Variant) return res.status(404).json({ status: 404, error: "Variant not found." });
      const newVariant = {
        size, color, quantity, price
      };
      await updateVariant(id, newVariant);
      return res.status(200).json({
        status: 200,
        message: "Successfully updated Variant."
      });
    } catch (error) {
      return res.status(404).json({ status: 404, error: "Resource not found." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateVariantImage(req, res) {
    try {
      const { id } = req.decoded.user;
      if (!req.file) return res.status(401).json({ error: true, message: "Please provide an image." });
      await updateImage(id, req.file.path);
      return res.status(200).json({
        status: 200,
        message: "Variant image updated."
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Resource not found." });
    }
  }
}
