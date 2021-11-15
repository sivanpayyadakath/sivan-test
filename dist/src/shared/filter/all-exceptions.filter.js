"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const constant_1 = require("../constant");
const logger_service_1 = require("../logger/logger.service");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor(config, logger) {
        this.config = config;
        this.logger = logger;
        this.logger.setContext(AllExceptionsFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        const path = req.url;
        const timestamp = new Date().toISOString();
        const requestId = req.headers[constant_1.REQUEST_ID_TOKEN_HEADER];
        let stack;
        let status;
        let message;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            message = exception.getResponse();
        }
        else if (exception instanceof Error) {
            message = exception.message;
            stack = exception.stack;
        }
        status = status || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        message = message || 'Internal server error';
        const error = {
            requestId,
            status,
            path,
            message,
            timestamp,
        };
        this.logger.warn({ error, stack });
        const isProMood = this.config.get('env') !== 'development';
        if (isProMood && status === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            error.message = 'Internal server error';
        }
        res.status(status).json({ error });
    }
};
AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    common_1.Catch(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        logger_service_1.AppLogger])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions.filter.js.map