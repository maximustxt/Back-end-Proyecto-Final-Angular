import Curso from "../../models/Cursos";

const getDetailCursoControlle = async (id: string) => {
  try {
    const AlumnoEncontrado = await Curso.findById(id);

    if (AlumnoEncontrado) {
      return AlumnoEncontrado;
    } else {
      throw new Error("Curso no encontrado!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getDetailCursoControlle;
