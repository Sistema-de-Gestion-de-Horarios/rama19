import AmbienteRepository from "../repository/AmbienteRepository";
import { IAmbiente } from "../models/Ambientes";
import Controller from "./Controller";

export default class AmbienteController extends Controller<IAmbiente> {
    constructor(){
        super(new AmbienteRepository(), 'Ambiente');
    }
}