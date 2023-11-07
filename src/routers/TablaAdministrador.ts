import { Router } from "express";

//*- IMPORT DE CONTROLLERS :
import VerificarTablaAdministradorController from "../controllers/TablaAdministrador/VerificarTablaAdministradorController";
import getTablaAdministradoresController from "../controllers/TablaAdministrador/getTablaAdministradoresController";
import getDetailTableAdministrador from "../controllers/TablaAdministrador/getDetailTableAdministrador";
import postTablaAdministradorController from "../controllers/TablaAdministrador/postTablaAdministradorController";
import deleteTablaAdministradorController from "../controllers/TablaAdministrador/deleteTablaAdministradorController";

const RutaTablaAdministrador = Router();

/!*------------------------------ VERIFICAR ADMINISTRADOR -------------------------------*/;

RutaTablaAdministrador.post("/Verificacion", async (req, res) => {
  try {
    const Administrador = req.body;

    const response = await VerificarTablaAdministradorController(Administrador);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

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

    const response = await getDetailTableAdministrador(id);
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

export default RutaTablaAdministrador;
