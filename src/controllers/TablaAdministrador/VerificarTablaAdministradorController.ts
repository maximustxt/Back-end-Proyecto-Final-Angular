//* INTERFACES :
import { IAdmin } from "../../../common/Interfaces";
import TablaAdmin from "../../models/TablaAdministrador";

const VerificarTablaAdministradorController = async (Administrador: IAdmin) => {
  try {
    const AdminEncontrado = await TablaAdmin.findOne({
      email: Administrador.email,
      nombre: Administrador.nombre,
    });

    if (AdminEncontrado) {
      return "Administrador Permitido!";
    } else {
      throw new Error("Administrador no Permitido!");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default VerificarTablaAdministradorController;
