import { model, Schema } from "mongoose";

const Cursos = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    profesor: { type: String, required: true },
    area: {
      type: String,
      enum: ["Programación y Desarrollo", "Diseño", "Seguridad"],
      required: true,
    },
    vacantes: { type: Number },
    fechaInicio: { type: String, required: true },
    fechaFinal: { type: String, required: true },
    alumnos: [{ type: Schema.Types.ObjectId, ref: "Alumo" }],
  },
  { timestamps: false }
);

const Curso = model("Curso", Cursos);

export default Curso;
