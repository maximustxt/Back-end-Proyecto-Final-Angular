import mongoose from "mongoose";
import Alumno from "../../models/Alumno";

const deleteCursosDelAlumnoController = async (
  idAlumno: string,
  idsCursos: string[]
) => {
  try {
    // Convertimos los ids en tipo ObjectID de mongoose.
    const alumnoObjectId = new mongoose.Types.ObjectId(idAlumno);
    const cursosObjectId = idsCursos.map(
      (cursoId) => new mongoose.Types.ObjectId(cursoId)
    );

    // Buscamos el Alumno.
    const alumno = await Alumno.findById(alumnoObjectId);

    if (alumno) {
      // Filtramos el array de cursos del Alumno y eliminamos los cursos deseados.
      alumno.cursos = alumno.cursos.filter(
        (cursoId) => !cursosObjectId.includes(cursoId)
      );

      await alumno.save();
    } else {
      throw new Error("Alumno no existente");
    }

    // Actualizamos la inscripcion del Alumno después de eliminar el curso deseado.
    const AlumnoActualizado = await Alumno.findById(idAlumno).populate(
      "cursos"
    );

    return AlumnoActualizado?.cursos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default deleteCursosDelAlumnoController;
