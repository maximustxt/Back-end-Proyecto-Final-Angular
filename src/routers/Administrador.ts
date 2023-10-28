import { Router } from "express";

//*- IMPORT DE CONTROLLERS :
import getAdministradorController from "../controllers/Administrador/getAdministradorController";
import getDetailAdministradorController from "../controllers/Administrador/getDetailAdministradorController";
import postAdministradorController from "../controllers/Administrador/postAdministradorController";
import deleteAdministradorController from "../controllers/Administrador/deleteAdministradorController";

const RutaAdministrador = Router();

/!*------------------------------ OBTENER ADMINISTRADOR ---------------------------------*/;

RutaAdministrador.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;

    const response = await getAdministradorController(name);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ OBTENER DETAIL ADMINISTRADOR ---------------------------------*/;

RutaAdministrador.get("/Detail/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getDetailAdministradorController(id);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ CREAR ADMINISTRADOR -------------------------------*/;

RutaAdministrador.post("/", async (req, res) => {
  try {
    const Administrador = req.body;

    const response = await postAdministradorController(Administrador);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ELIMINAR ADMINISTRADOR -------------------------------*/;

RutaAdministrador.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await deleteAdministradorController(id);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

export default RutaAdministrador;
