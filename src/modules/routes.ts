import jsonwebtokenSecurity from "./middleware";
import { Express } from "express";
import UserController from "./controller/UserController";
import PersonaController from "./controller/PersonaController";
import MateriaController from "./controller/MateriaController"; 
import AmbienteController from "./controller/AmbienteController";
class Routes {
  private routeparent: string;
  constructor(routeparent: string, app: Express) {
    this.routeparent = routeparent;
    this.configureRoutes(app);
    this.configPersonasRoutes(app);
    this.configMateriasRoutes(app);
    this.configAmbientesRoutes(app);
  }
  private configureRoutes(app: Express) {
    //**--USER ROUTES--------------------------------------------------------------------------------------- */
    const userController = new UserController();
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
  private configPersonasRoutes(app: Express){
    const personaController = new PersonaController();
    app
      .route(`${this.routeparent}/personas`)
      .post(personaController.create);
    app
      .route(`${this.routeparent}/personas`)
      .get(personaController.list);
    app
      .route(`${this.routeparent}/personas/:id`)
      .get(personaController.get);
    app
      .route(`${this.routeparent}/personas/:id`)
      .put(personaController.update);
    app
      .route(`${this.routeparent}/personas/:id`)
      .delete(personaController.remove);
  }
  private configMateriasRoutes(app: Express){
    const materiaController = new MateriaController();
    app
      .route(`${this.routeparent}/materias`)
      .post(materiaController.create);
    app
      .route(`${this.routeparent}/materias`)
      .get(materiaController.list);
    app
      .route(`${this.routeparent}/materias/:id`)
      .get(materiaController.get);
    app
      .route(`${this.routeparent}/materias/:id`)
      .put(materiaController.update);
    app
      .route(`${this.routeparent}/materias/:id`)
      .delete(materiaController.remove);
  }
  private configAmbientesRoutes(app: Express){
    const ambienteController = new AmbienteController();
    app
      .route(`${this.routeparent}/ambientes`)
      .post(ambienteController.create);
    app
      .route(`${this.routeparent}/ambientes`)
      .get(ambienteController.list);
    app
      .route(`${this.routeparent}/ambientes/:id`)
      .get(ambienteController.get);
    app
      .route(`${this.routeparent}/ambientes/:id`)
      .put(ambienteController.update);
    app
      .route(`${this.routeparent}/ambientes/:id`)
      .delete(ambienteController.remove);
  }
}
export default Routes;
