import UserRepository from "../repository/UserRepository";
import { IUser } from "../models/Users";
import Controller from "./Controller";
import { Request, Response } from "express";

export default class UserController extends Controller<IUser> {
    constructor(){
        super(new UserRepository(), 'User');
    }
    login = (request: Request, response: Response) => {
        var data = request.body;
        (<UserRepository>this.Repository).login(data).then(resp => {
            response.status(200).json({ serverResponse: resp });
        }).catch(err => {
            console.log(`Create ${this.Name} Error:`, err);
            response.status(403).json({ serverResponse: err });
        });
      }
}