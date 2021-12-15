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
const BusinessUser_1 = __importDefault(require("./repository/BusinessUser"));
var jsonwebtokenSecurity = (request, response, next) => {
    var token = request.headers["authorization"];
    if (!token) {
        response.status(300).json({ serverResponse: "No tiene acceso a este endpoint" });
        return;
    }
    jsonwebtoken_1.default.verify(token, "secret", (err, success) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            response.status(300).json({ serverResponse: "Token no valido " + err.message });
            return;
        }
        var id = success.id;
        var user = new BusinessUser_1.default();
        var userdata = yield user.readUsers(id);
        if (!userdata) {
            response.status(300).json({ serverResponse: "No valido " });
            return;
        }
        var roles = userdata.roles;
        for (var i = 0; i < roles.length; i++) {
            if (request.url.toLowerCase().includes(roles[i].urn.toLowerCase()) &&
                request.method.toLowerCase().includes(roles[i].method.toLowerCase())) {
                next();
                return;
            }
        }
        response.status(300).json({ serverResponse: "Usted no cuenta con los permisos " });
    }));
};
exports.default = jsonwebtokenSecurity;
//# sourceMappingURL=middleware.js.map