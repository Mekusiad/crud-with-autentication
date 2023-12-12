import { mongoose } from "mongoose";

export const User = mongoose.model("Pessoa", {
  _id: String,
  name: String,
  email: String,
  password: String,
  created_at: Date,
  updated_at: Date,
  last_login: Date,
  token: String,
  phone: Object,
});
