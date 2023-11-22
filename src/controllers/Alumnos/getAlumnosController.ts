import Alumno from "../../models/Alumno";

const getAlumnosController = async () => {
  try {
    const Alumnos = await Alumno.find().exec();

    const alumnosConSusCursos = await Promise.all(
      Alumnos.map(async (element) => {
        const cursoAlumnos = await Alumno.findById(element._id).populate(
          "cursos"
        );

        const alumnoNuevo = {
          ...element.toObject(),
          cursos: cursoAlumnos?.cursos,
        };

        return alumnoNuevo;
      })
    );

    return alumnosConSusCursos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getAlumnosController;
