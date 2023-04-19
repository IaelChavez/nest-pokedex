import * as Joi from "joi";
//*Archivo para validar las variables de entorno, pero mejor
export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6)
});