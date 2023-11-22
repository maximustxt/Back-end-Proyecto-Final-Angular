import mongoose from "mongoose";
import Alumno from "../../models/Alumno";

const putCursosDelAlumnoController = async (
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
      // Actualiza la propiedad cursos con los nuevos cursosObjectId
      alumno.cursos = cursosObjectId;
      await alumno.save();
    } else {
      throw new Error("Alumno no existente");
    }

    // Retornamos todos los alumnos actualizados.
    const todosLosAlumnos = await Alumno.find();

    // Filtramos los alumnos que tienen cursos.
    const ArrayDeInscripciones = todosLosAlumnos.filter(
      (a) => a.cursos.length > 0
    );

    return ArrayDeInscripciones;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default putCursosDelAlumnoController;
