//*- MODELO :
import Administrador from "../../models/Administrador";

const getDetailAdministradorController = async (id: string) => {
  try {
    const AdminEncontrado = await Administrador.findById(id);

    if (AdminEncontrado) {
      return AdminEncontrado;
    } else {
      throw new Error("Administrador no encontrado!");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getDetailAdministradorController;
