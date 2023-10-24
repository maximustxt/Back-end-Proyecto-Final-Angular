import Alumno from "../../models/Alumno";

const getDetailAlumnoControlle = async (id: string) => {
  try {
    const AlumnoEncontrado = await Alumno.findById(id);

    if (AlumnoEncontrado) {
      return AlumnoEncontrado;
    } else {
      throw new Error("Alumno no encontrado!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getDetailAlumnoControlle;
