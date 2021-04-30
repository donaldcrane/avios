import Joi from "joi";

const validation = variant => {
  const schema = Joi.object({
    size: Joi.number().integer().required().empty()
      .messages({
        "any.required": "Size is required.",
        "string.empty": "Sorry, size cannot be an empty field"
      }),
    color: Joi.string().empty().required()
      .messages({
        "any.required": "color is required.",
        "string.empty": "Sorry, color cannot be an empty field"
      }),
    quantity: Joi.number().integer().required().empty()
      .messages({
        "any.required": "Quantity is required.",
        "integer.empty": "Quantity cannot be an empty field.",
        "integer.base": "Please provide a valid number."
      }),
    price: Joi.number().integer().required().empty()
      .messages({
        "any.required": "An Amount is required.",
        "integer.empty": "Amount cannot be an empty field.",
        "integer.base": "Please provide a valid amount."
      }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(variant);
};
const validateId = ids => {
  const schema = Joi.object({
    id: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "ID not provided. Please provide an ID.",
        "string.empty": "ID cannot be an empty field.",
        "string.base": "ID must be a string.",
        "string.guid": "ID must be a UUID"
      }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(ids);
};

export { validation, validateId };
