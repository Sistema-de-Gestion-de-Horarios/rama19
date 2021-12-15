import mongoose, { Schema, Document } from "mongoose";

export interface ISimpleMateria {
  sigla?: string;
  nombre?: string;
  semestre?: number;
  grupo?: number;
}
export interface IMateria extends Document {
  sigla: string;
  nombre: string;
  semestre: number;
  grupo: number;
}
const MateriaSchema: Schema = new Schema({
  sigla: { type: String, required: true},
  nombre: { type: String, required: true },
  semestre: { type: Number, required: true },
  grupo: { type: Number, required: true },
});
export default mongoose.model<IMateria>("Materia", MateriaSchema);


