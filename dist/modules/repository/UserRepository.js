"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Users_1 = __importDefault(require("../models/Users"));
const Repository_1 = __importDefault(require("./Repository"));
class UserRepository extends Repository_1.default {
    constructor() {
        super(Users_1.default);
    }
    login(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Users_1.default.findOne(credentials).exec();
            if (user) {
                var token = jsonwebtoken_1.default.sign(JSON.parse(JSON.stringify(user)), "clave de sifrado");
                return {
                    token: token,
                    user: Object.assign(Object.assign({}, JSON.parse(JSON.stringify(user))), { password: undefined })
                };
            }
            else
                return Promise.reject(new Error("El usuario no existe"));
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map