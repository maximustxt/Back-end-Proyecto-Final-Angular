import { model, Schema } from "mongoose";

const Alumnos = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    imagen: { type: String, required: true },
    cursando: {
      type: String,
      required: true,
    },
    edad: { type: Number },
    cursos: [{ type: Schema.Types.ObjectId, ref: "Curso" }],
  },
  { timestamps: false }
);

const Alumno = model("Alumno", Alumnos);

export default Alumno;
