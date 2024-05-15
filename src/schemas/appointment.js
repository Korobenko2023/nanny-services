import Joi from "joi";
import { emailRegex } from "./log";

const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const timeRegex = /(\d){2}:(\d){2}/;
 
export const appointmentSchema = Joi.object({
    address: Joi.string().trim().required('Address is required'),
    phone: Joi.string()
        .trim()
        .matches(phoneRegex)
        .required()
        .empty(false)
        .messages({
              "any.required": "The phone number is required",
              "string.empty": "The phone number must not be empty",
              "string.pattern.base": "Invalid phone number",
        }),    
    age: Joi.string().trim().required('Age is required'),
    time: Joi.string()
        .length(5)
        .matches(timeRegex, 'Meeting time must have this pattern "00:00"')
        .required()
        .messages({
        "any.required": "Meeting time is required",
        "string.empty": "The phone number must not be empty",
        "string.pattern.base": "Meeting time must have this pattern 00:00",
    }),
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
    name: Joi.string()
        .trim()
        .required()
        .empty(false)
        .messages({
            "any.required": "The name field is required",
            "string.empty": "The name must not be empty",
        }),
    comment: Joi.string(),
})
    
  
