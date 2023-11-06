import TablaAdmin from "../../models/TablaAdministrador";

const getTablaAdministradoresController = async () => {
  try {
    const Administradores = await TablaAdmin.find();
    return Administradores;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getTablaAdministradoresController;
