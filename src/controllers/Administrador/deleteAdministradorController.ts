import mongoose from "mongoose";
//*- MODELO :
import Administrador from "../../models/Administrador";

const deleteAdministradorController = async (id: string) => {
  try {
    const AdminId = new mongoose.Types.ObjectId(id); // Convierte la cadena en ObjectId

    const AdmiEncontrado = await Administrador.findOneAndDelete(AdminId).exec(); // exec transforma a una promesa.
    if (AdmiEncontrado) {
      return "Administrador eliminado con exito!";
    } else {
      throw new Error("Administrador no existente!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default deleteAdministradorController;
