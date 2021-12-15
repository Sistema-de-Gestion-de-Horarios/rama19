"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
class UserModule {
    constructor(root, app) {
        console.log("Init user module");
        this.routes = new routes_1.default(root, app);
    }
}
exports.default = UserModule;
//# sourceMappingURL=init.js.map