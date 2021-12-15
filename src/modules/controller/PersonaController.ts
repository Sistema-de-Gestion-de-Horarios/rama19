import PersonaRepository from "../repository/PersonaRepository";
import { IPersona } from "../models/Personas";
import Controller from "./Controller";

export default class PersonaController extends Controller<IPersona> {
    constructor(){
        super(new PersonaRepository(), 'Persona');
    }
}