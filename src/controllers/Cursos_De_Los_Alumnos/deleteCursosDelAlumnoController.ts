import mongoose from "mongoose";
import Alumno from "../../models/Alumno";

const deleteCursosDelAlumnoController = async (
  idAlumno: string,
  idCurso: string
) => {
  try {
    // Convertimos los ids en tipo ObjectID de mongoose.
    const alumnoObjectId = new mongoose.Types.ObjectId(idAlumno);
    const cursoObjectId = new mongoose.Types.ObjectId(idCurso);

    // Eliminamos el carrito de la base de datos.
    // await Carrito.findByIdAndRemove(carritoObjectId);

    // Buscamos el Alumno.
    const alumnno = await Alumno.findById(alumnoObjectId);

    if (alumnno) {
      // Filtramos el carrito del Alumno y eliminamos el carrito deseado.
      alumnno.cursos = alumnno.cursos.filter(
        (cursoId) => cursoId.toString() !== cursoObjectId.toString()
      );
      await alumnno.save();
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
