"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configModuleOptions = void 0;
const configuration_1 = require("./configuration");
const Joi = require("@hapi/joi");
exports.configModuleOptions = {
    envFilePath: '.env',
    load: [configuration_1.default],
    validationSchema: Joi.object({
        APP_ENV: Joi.string()
            .valid('development', 'production', 'test')
            .default('development'),
        APP_PORT: Joi.number().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().optional(),
        DB_NAME: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        JWT_PUBLIC_KEY_BASE64: Joi.string().required(),
        JWT_PRIVATE_KEY_BASE64: Joi.string().required(),
        JWT_EXPIRES_IN_SECONDS: Joi.number().required(),
    }),
};
//# sourceMappingURL=module-options.js.map