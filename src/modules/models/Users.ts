import mongoose, { Schema, Document } from "mongoose";

export interface ISimpleUser {
  email?: string;
  password?: string;
  persona_id?: string;
  role?: string;
  created?: Date;
}
export interface IUser extends Document {
  email: string;
  password: string;
  persona_id: string;
  role: string;
  created: Date;
}
const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  persona_id: { type: String, required: true },
  role: { type: String, required: true },
  created: { type: Date, default: new Date() },
});
export default mongoose.model<IUser>("User", userSchema);


