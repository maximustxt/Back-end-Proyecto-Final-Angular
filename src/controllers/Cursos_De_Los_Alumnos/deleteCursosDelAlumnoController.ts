import mongoose from "mongoose";
import Alumno from "../../models/Alumno";

const deleteCursosDelAlumnoController = async (
  idAlumno: string,
  idCurso: any
) => {
  try {
    const { nameCursos } = idCurso;

    const ArrayNombreCursosABorra = nameCursos.split(",");

    if (ArrayNombreCursosABorra.length === 0) {
      return { error: "No se proporcionaron cursos para borrar" };
    }

    // Buscamos el Alumno.
    const alumno = await Alumno.findById(idAlumno).populate("cursos");

    if (!alumno) {
      return { error: "Alumno no existente" };
    }

    // Filtramos el array de cursos del Alumno.
    alumno.cursos = alumno.cursos.filter(
      (curso: any) => !ArrayNombreCursosABorra.includes(curso.nombre)
    );

    // Guardamos los cambios en el Alumno.
    await alumno.save();

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

export default deleteCursosDelAlumnoController;
