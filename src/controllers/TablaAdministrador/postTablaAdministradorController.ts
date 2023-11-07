//* MODEL :
import TablaAdmin from "../../models/TablaAdministrador";
//* INTERFACE :
import { IAdmin } from "../../../common/Interfaces";

const postTablaAdministradorController = async (Admin: IAdmin) => {
  try {
    const AdminEncontrado = await TablaAdmin.findOne({ nombre: Admin.nombre });

    if (AdminEncontrado) {
      throw new Error("Administrador Encontrado. Debe registrarse con otro.");
    } else {
      const newAdmin = new TablaAdmin(Admin);
      await newAdmin.save();
      const Administradores = TablaAdmin.find();
      return Administradores;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postTablaAdministradorController;
