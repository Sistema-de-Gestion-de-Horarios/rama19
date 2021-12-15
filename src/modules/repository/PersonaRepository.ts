import jsonwebtoken from "jsonwebtoken";
import Persona, { ISimplePersona, IPersona } from "../models/Personas";
import Repository from "./Repository";
export default class PersonaRepository extends Repository<IPersona> {
    constructor(){
        super(Persona);
    }
}