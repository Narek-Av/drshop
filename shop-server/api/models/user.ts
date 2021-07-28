import { IUser } from "../types";
import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  id: { type: String },
});

const User = mongoose.model<IUser>("User", usersSchema);

export default User;
