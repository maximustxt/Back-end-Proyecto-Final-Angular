import Curso from "../../models/Cursos";

const getCursosParaAlumnosController = async () => {
  try {
    const nombreCursos = await Curso.find();
    return nombreCursos.map((e) => e.nombre);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getCursosParaAlumnosController;
