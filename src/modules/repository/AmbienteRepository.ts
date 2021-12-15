import Ambiente, { ISimpleAmbiente, IAmbiente } from "../models/Ambientes";
import Repository from "./Repository";
export default class AmbienteRepository extends Repository<IAmbiente> {
    constructor(){
        super(Ambiente);
    }
}