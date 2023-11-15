import mongoose from "mongoose";
//*- MODELO ALUMNO :
import Alumno from "../../models/Alumno";
//*- Interfaces :
import { IAlumno } from "../../../common/Interfaces";

const postAlumnosController = async (P_Alumno: IAlumno, idCurso: string) => {
  try {
    const { nombre } = P_Alumno;

    const alumno = await Alumno.findOne({ nombre }).exec();

    if (alumno) {
      // Agregar a los cursos del Alumno el nuevo curso :
      const objectIdCurso = new mongoose.Types.ObjectId(idCurso);
      alumno.cursos.push(objectIdCurso);

      // Guardamos los cambios :
      await alumno.save();
      throw new Error("Alumno ya creado!");
    } else {
      const newAlumno = new Alumno(P_Alumno);
      await newAlumno.save();
      const Alumnos = await Alumno.find();
      return Alumnos;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default postAlumnosController;
