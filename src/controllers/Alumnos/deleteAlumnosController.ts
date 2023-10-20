import mongoose from "mongoose";
import Alumno from "../../models/Alumno";

const deleteAlumnosController = async (id: string) => {
  try {
    const alumnoId = new mongoose.Types.ObjectId(id); // Convierte la cadena en ObjectId

    const alumnoEncontrar = await Alumno.findOneAndDelete(alumnoId).exec(); // exec transforma a una promesa.
    if (alumnoEncontrar) {
      const Alumnos = await Alumno.find();
      return Alumnos;
    } else {
      throw new Error("Alumno no existente!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default deleteAlumnosController;
