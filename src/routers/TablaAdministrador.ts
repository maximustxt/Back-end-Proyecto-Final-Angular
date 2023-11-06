import { Router } from "express";

//*- IMPORT DE CONTROLLERS :
import getTablaAdministradoresController from "../controllers/TablaAdministrador/getTablaAdministradoresController";
import getTablaDetailAdministradorController from "../controllers/TablaAdministrador/getTablaDetailAdministradorController";
import postTablaAdministradorController from "../controllers/TablaAdministrador/postTablaAdministradorController";
import deleteTablaAdministradorController from "../controllers/TablaAdministrador/deleteTablaAdministradorController";
import VerificarTablaAdministradorController from "../controllers/TablaAdministrador/VerificarTablaAdministradorController";

const RutaTablaAdministrador = Router();

/!*------------------------------ OBTENER ADMINISTRADOR ---------------------------------*/;

RutaTablaAdministrador.get("/", async (req, res) => {
  try {
    const response = await getTablaAdministradoresController();
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ OBTENER DETAIL ADMINISTRADOR ---------------------------------*/;

RutaTablaAdministrador.get("/Detail/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getTablaDetailAdministradorController(id);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ CREAR ADMINISTRADOR -------------------------------*/;

RutaTablaAdministrador.post("/", async (req, res) => {
  try {
    const Administrador = req.body;

    const response = await postTablaAdministradorController(Administrador);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ELIMINAR ADMINISTRADOR -------------------------------*/;

RutaTablaAdministrador.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await deleteTablaAdministradorController(id);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ VERIFICAR ADMINISTRADOR -------------------------------*/;

RutaTablaAdministrador.post("/", async (req, res) => {
  try {
    const Administrador = req.body;

    const response = await VerificarTablaAdministradorController(Administrador);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

export default RutaTablaAdministrador;
