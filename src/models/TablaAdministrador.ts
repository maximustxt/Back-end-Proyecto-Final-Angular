import { Schema, model } from "mongoose";

const TablaAdministrador = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  imagen: { type: String, required: true },
  edad: { type: Number, required: true },
});

const TablaAdmin = model("TablaAdministrador", TablaAdministrador);

export default TablaAdmin;
