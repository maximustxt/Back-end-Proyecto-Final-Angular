import { Router } from "express";
const CursosDeLosAlumnos = Router();

//* CONTROLLERS :
import getCursosDelAlumnoController from "../controllers/Cursos_De_Los_Alumnos/getCursosDelAlumnoController";
import postCursosDelAlumnoController from "../controllers/Cursos_De_Los_Alumnos/postCursosDelAlumnoController";
import deleteCursosDelAlumnoController from "../controllers/Cursos_De_Los_Alumnos/deleteCursosDelAlumnoController";
import putCursosDelAlumnoController from "../controllers/Cursos_De_Los_Alumnos/putCursosDelAlumnoController";

/!*------------------------------ OBTENER CURSOS DE LOS ALUMNOS ---------------------------------*/;

CursosDeLosAlumnos.get("/:idAlumno", async (req, res) => {
  try {
    const { idAlumno } = req.params;
    const response = await getCursosDelAlumnoController(idAlumno);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ GUARDAR NUEVO CURSO DEL ALUMNO -------------------------------*/;

CursosDeLosAlumnos.post("/", async (req, res) => {
  try {
    const { idAlumno, idsCursos } = req.body;

    const response = await postCursosDelAlumnoController(idAlumno, idsCursos);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ELIMINAR CURSOS DEL ALUMNO ---------------------------------*/;

CursosDeLosAlumnos.delete("/:idAlumno/", async (req, res) => {
  try {
    const { idAlumno } = req.params;

    const idCurso: any = req.query;

    const { idsCursos } = idCurso;

    const response = await deleteCursosDelAlumnoController(idAlumno, idCurso);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ EDITAR LOS CURSOS DEL ALUMNO -------------------------------*/;

CursosDeLosAlumnos.put("/", async (req, res) => {
  try {
    const { idAlumno, idsCursos } = req.body;

    const response = await putCursosDelAlumnoController(idAlumno, idsCursos);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

export default CursosDeLosAlumnos;
