import mongoose from "mongoose";
//*- MODELO ALUMNO :
import Alumno from "../../models/Alumno";
//*- Interfaces :
import { IAlumno } from "../../../common/Interfaces";

const postAlumnosController = async (P_Alumno: IAlumno) => {
  try {
    const { nombre } = P_Alumno;

    const alumno = await Alumno.findOne({ nombre }).exec();

    if (alumno) {
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
