export interface IAlumno {
  _id?: string;
  nombre: string;
  apellido: string;
  edad: number;
  imagen: string;
  cursando: string;
}

export interface ICursos {
  _id?: string;
  nombre: string;
  descripcion: string;
  profesor: string;
  area: string;
  vacantes: number;
  fechaInicio: string;
  fechaFinal: string;
}

export interface IAdministrador {
  _id?: string;
  telefono?: string;
  nombre: string;
  email: string;
  constraseña: string;
}

export interface IAdmin {
  _id?: string;
  nombre: string;
  apellido: string;
  edad: number;
  imagen: string;
  email: string;
}
