"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(repository, name) {
        this.create = (request, response) => {
            var data = request.body;
            data["registerdate"] = new Date();
            this.Repository.store(data).then((reg) => {
                response.status(201).json({ serverResponse: reg });
            }).catch(err => {
                console.log(`Create ${this.Name} Error:`, err);
                response.status(403).json({ serverResponse: err });
            });
        };
        this.list = (request, response) => {
            this.Repository.list(request.query.query, request.query.options).then((registers) => {
                response.status(200).json({ serverResponse: registers });
            }).catch(err => {
                console.log(`List ${this.Name} Error:`, err);
                response.status(403).json({ serverResponse: err });
            });
        };
        this.get = (request, response) => {
            let id = request.params.id;
            this.Repository.get(id).then((reg) => {
                response.status(200).json({ serverResponse: reg });
            }).catch(err => {
                console.log(`Get ${this.Name} Error:`, err);
                response.status(300).json({ serverResponse: `El ${this.Name} no esta registrado` });
            });
        };
        this.update = (request, response) => {
            let id = request.params.id;
            var params = request.body;
            this.Repository.update(id, params).then((reg) => {
                response.status(200).json({ serverResponse: reg });
            }).catch(err => {
                console.log(`Update ${this.Name} Error:`, err);
                response.status(300).json({ serverResponse: `El ${this.Name} no existe!` });
            });
        };
        this.remove = (request, response) => {
            let id = request.params.id;
            this.Repository.delete(id).then((reg) => {
                response.status(200).json({ serverResponse: reg });
            }).catch(err => {
                console.log(`Delete ${this.Name} Error:`, err);
                response.status(300).json({ serverResponse: `El ${this.Name} no existe!` });
            });
        };
        this.Repository = repository;
        this.Name = name;
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map