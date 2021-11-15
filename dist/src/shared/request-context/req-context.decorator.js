"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqContext = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("./util");
exports.ReqContext = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return util_1.createRequestContext(request);
});
//# sourceMappingURL=req-context.decorator.js.map