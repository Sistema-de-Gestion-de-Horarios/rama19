"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("./controller/UserController"));
class Routes {
    constructor(routeparent, app) {
        this.routeparent = routeparent;
        this.configureRoutes(app);
    }
    configureRoutes(app) {
        //**--USER ROUTES--------------------------------------------------------------------------------------- */
        const userController = new UserController_1.default();
        app
            .route(`${this.routeparent}/users`)
            .post(userController.create);
        app
            .route(`${this.routeparent}/users`)
            .get(userController.list);
        app
            .route(`${this.routeparent}/users/login`)
            .post(userController.login);
        app
            .route(`${this.routeparent}/users/:id`)
            .get(userController.get);
        app
            .route(`${this.routeparent}/users/:id`)
            .put(userController.update);
        app
            .route(`${this.routeparent}/users/:id`)
            .delete(userController.remove);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map