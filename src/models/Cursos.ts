import { model, Schema } from "mongoose";

const Cursos = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
    profesor: { type: String, required: true },
    area: {
      type: String,
      enum: ["Programación y Desarrollo", "Diseño", "Seguridad"],
      required: true,
    },
    vacantes: { type: Number },
    alumnos: [{ type: Schema.Types.ObjectId, ref: "Alumo" }], // todo los Alumnos del curso.
  },
  { timestamps: false }
);

const Curso = model("Curso", Cursos);

export default Curso;
