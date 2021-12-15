import Materia, { ISimpleMateria, IMateria } from "../models/Materias";
import Repository from "./Repository";
export default class MateriaRepository extends Repository<IMateria> {
    constructor(){
        super(Materia);
    }
}