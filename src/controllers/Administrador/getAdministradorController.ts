//*- MODELO :
import Administrador from "../../models/Administrador";

const getAdministradorController = async (nombre: string) => {
  try {
    const AdminEncontrado = await Administrador.findOne({ nombre });

    if (AdminEncontrado) {
      return AdminEncontrado;
    } else {
      throw new Error("Administrador no encontrado!");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getAdministradorController;
