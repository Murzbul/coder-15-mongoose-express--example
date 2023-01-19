import mongoose, { Schema } from "mongoose";

const userCollection = 'users';

const UserSchema = new Schema({
  nombre: { type: Schema.Types.String, require: true, max: 30 },
  apellido: { type: Schema.Types.String, require: true, max: 40 },
  edad: { type: Schema.Types.Number, require: true, max: 100 },
  dni: { type: Schema.Types.Number, require: true },
  curso: { type: Schema.Types.String, require: true, max: 2 },
  nota: { type: Schema.Types.Number, require: true, max: 10 }
})

export const users = mongoose.model(userCollection, UserSchema);
