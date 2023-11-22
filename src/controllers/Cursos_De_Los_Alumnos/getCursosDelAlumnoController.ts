//* MODEL ALUMNO :
import Alumno from "../../models/Alumno";

const getCursosDelAlumnoController = async (idAlumno: string) => {
  try {
    const alumno = await Alumno.findById(idAlumno).populate("cursos");

    if (!alumno) {
      throw new Error("Alumno no encontrado!");
    }
    // Nos traemos todos los cursos del alumno :
    const cursosDelAlumno = alumno.cursos;

    return cursosDelAlumno;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getCursosDelAlumnoController;
