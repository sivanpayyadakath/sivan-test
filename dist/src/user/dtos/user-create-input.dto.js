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
exports.CreateUserInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const role_constant_1 = require("../../auth/constants/role.constant");
class CreateUserInput {
}
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(6, 100),
    class_validator_1.IsAlphanumeric(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.Length(6, 100),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayNotEmpty(),
    class_validator_1.IsEnum(role_constant_1.ROLE, { each: true }),
    __metadata("design:type", Array)
], CreateUserInput.prototype, "roles", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateUserInput.prototype, "isAccountDisabled", void 0);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=user-create-input.dto.js.map