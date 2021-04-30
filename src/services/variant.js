import database from "../models";

/**
 * @class VariantServices
 * @description allows VariantServices user create and check Variant details
 * @exports VariantServices
 */
export default class VariantServices {
  /**
   * @param {string} newVariant - The variant details
   * @returns {object} An instance of the Variants model class
   */
  static async addVariant(newVariant) {
    try {
      return await database.Variants.create(newVariant);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} An instance of the Variants model class
   */
  static async getAllVariants() {
    try {
      return await database.Variants.findAll({ });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The Variant id
   * @returns {object} An instance of the Variants model class
   */
  static async getVariant(id) {
    try {
      return await database.Variants.findOne({
        where: {
          id
        },
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The Variant name
   * @returns {object} An instance of the Variants model class
   */
  static async deleteVariant(id) {
    try {
      const Variant = await database.Variants.findOne({ where: { id } });
      return await Variant.destroy({ cascade: true });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The old variant name
   * @param {string} Variant - The new variant details
   * @returns {object} An instance of the Variants model class
   */
  static async updateVariant(id, Variant) {
    try {
      return await database.Variants.update(Variant, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }
}
