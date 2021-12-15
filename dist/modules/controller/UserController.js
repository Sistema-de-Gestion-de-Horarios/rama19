"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../repository/UserRepository"));
const Controller_1 = __importDefault(require("./Controller"));
class UserController extends Controller_1.default {
    constructor() {
        super(new UserRepository_1.default(), 'User');
        this.login = (request, response) => {
            var data = request.body;
            this.Repository.login(data).then(resp => {
                response.status(200).json({ serverResponse: resp });
            }).catch(err => {
                console.log(`Create ${this.Name} Error:`, err);
                response.status(403).json({ serverResponse: err });
            });
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map