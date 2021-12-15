import express, { Express } from "express";
import cors from 'cors';
import * as bodyParser from "body-parser";
import UserModules from "./modules/init";
import mongoose, { Mongoose } from "mongoose";
class App {
  public app: Express = express();
  public mongooseClient: Mongoose;
  constructor() {
    this.configuration();
    this.connectDatabase();
    this.initApp();
  }
  public connectDatabase() {
    let host: string = "mongodb://localhost:27017";
    let database: string = process.env.DATABASE || "proyecto-seminario";
    let connectionString: string = `${host}/${database}`;
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
    });
    //Eventos
    mongoose.connection.on("error", (err) => {
      console.log("Connection Fail");
      console.log(err);
    });
    mongoose.connection.on("open", () => {
      console.log("database connection success!");
    });
    this.mongooseClient = mongoose;
  }
  public configuration() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  public initApp() {
    console.log("LOAD MODULES");
    const userModule = new UserModules("/api", this.app);
  }
}
export default new App();
