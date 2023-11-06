//* MODELO :
import TablaAdmin from "../../models/TablaAdministrador";
import mongoose from "mongoose";

const deleteTablaAdministradorController = async (id: string) => {
  try {
    const AdminId = new mongoose.Types.ObjectId(id); // Convierte la cadena en ObjectId

    const AdminEncontrado = await TablaAdmin.findOneAndDelete(AdminId).exec(); // exec transforma a una promesa.
    if (AdminEncontrado) {
      const Administradores = await TablaAdmin.find();
      return Administradores;
    } else {
      throw new Error("Administrador no existente!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default deleteTablaAdministradorController;
