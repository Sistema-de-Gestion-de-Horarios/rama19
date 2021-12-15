import MateriaRepository from "../repository/MateriaRepository";
import { IMateria } from "../models/Materias";
import Controller from "./Controller";

export default class MateriaController extends Controller<IMateria> {
    constructor(){
        super(new MateriaRepository(), 'Materia');
    }
}