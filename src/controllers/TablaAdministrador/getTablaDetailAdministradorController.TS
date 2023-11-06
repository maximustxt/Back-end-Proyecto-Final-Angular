//* MODELO :
import TablaAdmin from "../../models/TablaAdministrador";

const getTablaDetailAdministradorController = async (id: string) => {
  try {
    const AdminEncontrado = await TablaAdmin.findById(id);

    if (AdminEncontrado) {
      return AdminEncontrado;
    } else {
      throw new Error("Administrador no encontrado!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getTablaDetailAdministradorController;
