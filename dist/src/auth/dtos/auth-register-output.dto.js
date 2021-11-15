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
exports.RegisterOutput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const role_constant_1 = require("../constants/role.constant");
class RegisterOutput {
}
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], RegisterOutput.prototype, "id", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], RegisterOutput.prototype, "name", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], RegisterOutput.prototype, "username", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty({ example: [role_constant_1.ROLE.USER] }),
    __metadata("design:type", Array)
], RegisterOutput.prototype, "roles", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], RegisterOutput.prototype, "email", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], RegisterOutput.prototype, "isAccountDisabled", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], RegisterOutput.prototype, "createdAt", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], RegisterOutput.prototype, "updatedAt", void 0);
exports.RegisterOutput = RegisterOutput;
//# sourceMappingURL=auth-register-output.dto.js.map