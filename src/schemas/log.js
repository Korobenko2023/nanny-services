import Joi from "joi";

export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const loginSchema = Joi.object({
    email: Joi.string()
        .trim()
        .pattern(emailRegex)
        .required()
        .empty(false)
        .messages({
            "any.required": "The email field is required",
            "string.empty": "The email must not be empty",
            "string.pattern.base": "The email must be in format test@gmail.com",
        }),
    password: Joi.string()
        .trim()
        .required()
        .min(6)
        .empty(false)
        .messages({
            "any.required": "The password field is required",
            "string.empty": "The password must not be empty",
            "string.min": "The password must be not less 6 symbols",
        }),
});