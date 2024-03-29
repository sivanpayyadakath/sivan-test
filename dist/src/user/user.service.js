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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_repository_1 = require("./user.repository");
const user_entity_1 = require("./entities/user.entity");
const add_user_dto_1 = require("./dto/add-user.dto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async add(input) {
        const user = new user_entity_1.User();
        user.email = input.email;
        user.name = input.name;
        user.password = await bcrypt_1.hash(input.password, 10);
        const insertedUser = await this.userRepository.save(user);
        const output = new add_user_dto_1.AddUserOutput();
        output.id = insertedUser.id;
        output.email = insertedUser.email;
        output.name = insertedUser.name;
        return output;
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ email });
    }
    async findById(id) {
        return this.userRepository.findOne(id);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map