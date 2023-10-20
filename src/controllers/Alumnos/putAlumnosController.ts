import Alumno from "../../models/Alumno";
//*- Interfaces :
import { IAlumno } from "../../../common/Interfaces";

const putAlumnosController = async (id: string, P_Alumno: IAlumno) => {
  try {
    let alumno = await Alumno.findById(id).exec();

    if (!alumno) {
      throw new Error("Alumno Inexistente");
    } else {
      alumno.set(P_Alumno);
      await alumno?.save();
      const Alumnos = await Alumno.find();
      return Alumnos;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default putAlumnosController;
