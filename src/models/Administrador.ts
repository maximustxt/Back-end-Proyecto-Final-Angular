import { Schema, model } from "mongoose";

const Administrator = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  telefono: { type: String, required: true },
});

const Administrador = model("Administrador", Administrator);

export default Administrador;
