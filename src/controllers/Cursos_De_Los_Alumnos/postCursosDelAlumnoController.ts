import mongoose from "mongoose";
//* MODEL ALUMNO :
import Alumno from "../../models/Alumno";

const postCursosDelAlumnoController = async (
  idAlumno: string,
  idsCursos: string[]
) => {
  try {
    // Buscar alumno :
    const alumno = await Alumno.findById(idAlumno);

    if (!alumno) throw new Error("Alumno no encontrado!");

    idsCursos.map(async (curso) => {
      // Agregar a los cursos del Alumno el nuevo curso :
      const objectIdCurso = new mongoose.Types.ObjectId(curso);

      if (!alumno.cursos.includes(objectIdCurso)) {
        // Si el curso no existe, agregarlo a la lista
        alumno.cursos.push(objectIdCurso);
        // Guardamos los cambios :
        await alumno.save();
      } else {
        throw new Error("Curso ya existente");
      }
    });
    return "Curso/s agregado/s con exito! =) ";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postCursosDelAlumnoController;
