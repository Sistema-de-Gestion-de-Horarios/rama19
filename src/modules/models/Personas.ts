import mongoose, { Schema, Document } from "mongoose";

export interface ISimplePersona {
  nombres?: string;
  apellidos?: string;
  tipo?: string;
  cargahoraria?: String;
}
export interface IPersona extends Document {
  nombres: string;
  apellidos: string;
  tipo: string;
  cargahoraria: string;
}
const PersonaSchema: Schema = new Schema({
  nombres: { type: String, required: true },    
  apellidos: { type: String, required: true },
  tipo: { type: String, required: true },
  cargahoraria: { type: String, required: false },
});
export default mongoose.model<IPersona>("Persona", PersonaSchema);


