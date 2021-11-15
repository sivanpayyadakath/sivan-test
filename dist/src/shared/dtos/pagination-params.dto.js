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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationParamsDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class PaginationParamsDto {
    constructor() {
        this.limit = 100;
        this.offset = 0;
    }
}
__decorate([
    swagger_1.ApiPropertyOptional({
        description: 'Optional, defaults to 100',
        type: Number,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    class_transformer_1.Transform((value) => parseInt(value, 10), { toClassOnly: true }),
    __metadata("design:type", Object)
], PaginationParamsDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: 'Optional, defaults to 0',
        type: Number,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    class_transformer_1.Transform((value) => parseInt(value, 10), { toClassOnly: true }),
    __metadata("design:type", Object)
], PaginationParamsDto.prototype, "offset", void 0);
exports.PaginationParamsDto = PaginationParamsDto;
//# sourceMappingURL=pagination-params.dto.js.map