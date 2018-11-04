"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let authMicroService = new app_1.default(process.env.PORT || 3000);
exports.default = authMicroService.run();
//# sourceMappingURL=server.js.map