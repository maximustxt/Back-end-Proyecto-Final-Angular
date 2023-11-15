import mongoose from "mongoose";
//* MODEL ALUMNO :
import Alumno from "../../models/Alumno";

const postCursosDelAlumnoController = async (
  idAlumno: string,
  idCurso: string
) => {
  try {
    // Buscar alumno :
    const alumno = await Alumno.findById(idAlumno);

    if (!alumno) throw new Error("Alumno no encontrado!");

    // Agregar a los cursos del Alumno el nuevo curso :
    const objectIdCurso = new mongoose.Types.ObjectId(idCurso);
    alumno.cursos.push(objectIdCurso);

    // Guardamos los cambios :
    await alumno.save();
    return "Curso agregado con exito! =) ";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postCursosDelAlumnoController;
