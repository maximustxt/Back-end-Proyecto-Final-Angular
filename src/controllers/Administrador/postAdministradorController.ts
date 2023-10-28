//*- MODELO :
import Administrador from "../../models/Administrador";
//*- INTERFACE :
import { IAdministrador } from "../../../common/Interfaces";

const postAdministradorController = async (administrador: IAdministrador) => {
  try {
    const AdminEncontrado = await Administrador.findById(administrador._id);

    if (AdminEncontrado) {
      throw new Error("Administrador Encontrado. Debe registrarse con otro.");
    } else {
      const newAdmin = new Administrador(administrador);
      await newAdmin.save();
      return "Administrador creado con exito!";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postAdministradorController;
