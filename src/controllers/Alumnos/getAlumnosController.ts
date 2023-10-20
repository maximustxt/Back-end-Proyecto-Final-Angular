import Alumno from "../../models/Alumno";

const getAlumnosController = async () => {
  try {
    const Alumnos = await Alumno.find();
    return Alumnos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getAlumnosController;
