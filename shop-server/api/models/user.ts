import { IUser } from "../types";
import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  id: { type: String },
});

const User = mongoose.model<IUser>("User", usersSchema);

export default User;
