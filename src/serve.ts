import express from "express";
import morgan from "morgan";
import cors from "cors";
const serve = express();

//*- IMPORT RUTAS :

import RutaAlumno from "./routers/Alumnos";
import RutaCurso from "./routers/Cursos";
import RutaAdministrador from "./routers/Administrador";

//*- PROXYS :

serve.use(cors());
serve.use(express.json());
serve.use(morgan("dev"));
serve.use("/Alumnos", RutaAlumno);
serve.use("/Cursos", RutaCurso);
serve.use("/Administrador", RutaAdministrador);

export default serve;
