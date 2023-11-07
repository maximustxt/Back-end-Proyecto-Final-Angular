//* MODEL :
import TablaAdmin from "../../models/TablaAdministrador";
//* INTERFACE :
import { IAdmin } from "../../../common/Interfaces";

const putAdministradorTablaControlle = async (id: string, Admin: IAdmin) => {
  try {
    let administrador = await TablaAdmin.findById(id).exec();

    if (!administrador) {
      throw new Error("Administrador Inexistente");
    } else {
      administrador.set(Admin);
      await administrador?.save();
      const Administradores = await TablaAdmin.find();
      return Administradores;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default putAdministradorTablaControlle;
