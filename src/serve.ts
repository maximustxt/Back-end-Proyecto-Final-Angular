import express from "express";
import morgan from "morgan";
import cors from "cors";
const serve = express();

//*- IMPORT RUTAS :

import RutaAlumno from "./routers/Alumnos";
import RutaCurso from "./routers/Cursos";
import RutaAdministrador from "./routers/Administrador";
import RutaTablaAdministrador from "./routers/TablaAdministrador";
import CursosDeLosAlumnos from "./routers/CursosDeLosAlumnos";

//*- PROXYS :

serve.use(cors());
serve.use(express.json());
serve.use(morgan("dev"));
serve.use("/Alumnos", RutaAlumno);
serve.use("/Cursos", RutaCurso);
serve.use("/Administrador", RutaAdministrador);
serve.use("/TablaAdministradores", RutaTablaAdministrador);
serve.use("/CursosDeLosAlumnos", CursosDeLosAlumnos);

export default serve;
