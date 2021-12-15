import { Request, Response } from "express";
import Repository from "../repository/Repository";

class Controller<IModel> {
  Repository: Repository<IModel>;
  Name: string;
  constructor(repository: Repository<IModel>,name: string) {
    this.Repository = repository;
    this.Name = name;
  }
  create = (request: Request, response: Response) => {
    var data = request.body;
    data["registerdate"] = new Date();
    this.Repository.store(data).then((reg:IModel) => {
        response.status(201).json({ serverResponse: reg });   
    }).catch(err => {
        console.log(`Create ${this.Name} Error:`, err);
        response.status(403).json({ serverResponse: err });
    });
    
  }
  list = (request: Request, response: Response) => {
    this.Repository.list(request.query.query,request.query.options).then((registers: Array<IModel>) => {
        response.status(200).json({ serverResponse: registers });
    }).catch( err => {
        console.log(`List ${this.Name} Error:`, err);
        response.status(403).json({ serverResponse: err });
    });
  }
  get = (request: Request, response: Response) => {
    let id: string = request.params.id;
    this.Repository.get(id).then((reg: IModel) => {
        response.status(200).json({ serverResponse: reg });
    }).catch( err => {
        console.log(`Get ${this.Name} Error:`, err);
        response.status(300).json({ serverResponse: `El ${this.Name} no esta registrado`});
    });
  }
  update = (request: Request, response: Response) => {
    let id: string = request.params.id;
    var params = request.body;
    this.Repository.update(id, params).then((reg: IModel) => {
        response.status(200).json({ serverResponse: reg });
    }).catch( err => {
        console.log(`Update ${this.Name} Error:`, err);
        response.status(300).json({ serverResponse: `El ${this.Name} no existe!`});
    });
  }
  remove = (request: Request, response: Response) => {
    let id: string = request.params.id;
    this.Repository.delete(id).then((reg: IModel) => {
        response.status(200).json({ serverResponse: reg });
    }).catch( err => {
        console.log(`Delete ${this.Name} Error:`,err);
        response.status(300).json({ serverResponse: `El ${this.Name} no existe!`});
    });
  }
}
export default Controller;
