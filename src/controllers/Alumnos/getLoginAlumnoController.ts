//* MODEL :
import Alumno from "../../models/Alumno";

const getLoginAlumnoController = async (nombre: string) => {
  try {
    const AlumnoEncontrado = await Alumno.findOne({ nombre });

    if (AlumnoEncontrado) {
      return AlumnoEncontrado;
    } else {
      throw new Error("Alumno no encontrado!");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getLoginAlumnoController;
