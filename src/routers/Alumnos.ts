import { Router } from "express";

//*- IMPORT DE CONTROLLERS :
import getAlumnosControlle from "../controllers/Alumnos/getAlumnosController";
import putAlumnosControlle from "../controllers/Alumnos/putAlumnosController";
import postAlumnosControlle from "../controllers/Alumnos/postAlumnosController";
import deleteAlumnosControlle from "../controllers/Alumnos/deleteAlumnosController";
import getDetailAlumnoControlle from "../controllers/Alumnos/getDetailAlumnoControlle";
import getLoginAlumnoController from "../controllers/Alumnos/getLoginAlumnoController";

const RutaAlumnos = Router();

/!*------------------------------ OBTENER ALUMNOS ---------------------------------*/;

RutaAlumnos.get("/", async (req, res) => {
  try {
    const response = await getAlumnosControlle();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

/!*------------------------------ OBTENER DETAIL ALUMNOS ---------------------------------*/;

RutaAlumnos.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getDetailAlumnoControlle(id);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

/!*------------------------------ LOGIN ALUMNO ---------------------------------*/;

RutaAlumnos.get("/Login/:nombre", async (req, res) => {
  try {
    const { nombre } = req.params;

    const response = await getLoginAlumnoController(nombre);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ACTUALIZAR ALUMNO -------------------------------*/;

RutaAlumnos.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const alumno = req.body;

    const response = await putAlumnosControlle(_id, alumno);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

/!*------------------------------ CREAR ALUMNO -------------------------------*/;

RutaAlumnos.post("/", async (req, res) => {
  try {
    const alumno = req.body;

    const response = await postAlumnosControlle(alumno);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ELIMINAR ALUMNO -------------------------------*/;

RutaAlumnos.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const response = await deleteAlumnosControlle(_id);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default RutaAlumnos;
