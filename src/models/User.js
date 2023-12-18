import { mongoose } from "mongoose";

// export const User = mongoose.model("Pessoa", {
//   _id: String,
//   name: String,
//   email: String,
//   password: String,
//   created_at: Date,
//   updated_at: Date,
//   last_login: Date,
//   token: String,
//   phone: Object,
// });

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    lowercase: true,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: true,
  },
  phone: {
    type: Object,
    require: true,
  },
  token: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  last_login: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("Pessoa", UserSchema);
