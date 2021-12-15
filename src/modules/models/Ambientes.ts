import mongoose, { Schema, Document } from "mongoose";

export interface ISimpleAmbiente {
  numero?: string;
  piso?: string;
}
export interface IAmbiente extends Document {
  numero: string;
  piso: string;
}
const AmbienteSchema: Schema = new Schema({
  numero: { type: String, required: true},
  piso: { type: String, required: true },
});
export default mongoose.model<IAmbiente>("Ambiente", AmbienteSchema);




