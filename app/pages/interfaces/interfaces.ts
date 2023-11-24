export interface IEstudiantes {
    id: number;
    nombre: string;
    correo: string;
    contraseña: string;
    isactive: Boolean;
}

export interface IEstudiante {
    nombre: string;
    correo: string;
    contraseña: string;
    isactive: Boolean;
}

export interface IProfesores {
    id: number;
    nombre: string;
    correo: string;
    contraseña: string;
    isactive: Boolean;
    asignaturas: {
        id: number;
        nombre: string;
        tipo: string;
        horas: string;
    } [];
}

export interface IProfesor {
    nombre: string;
    correo: string;
    contraseña: string;
    isactive: Boolean;
    asignaturas: {
        id: number;
        nombre: string;
        tipo: string;
        horas: string;
    } [];
}

export interface IJuegos {
    id: number;
    nombre: string;
    desc: string;
    precio: string;
    imagen: string;
    url: string;
}

export interface IJuego {
    nombre: string;
    desc: string;
    precio: string;
    imagen: string;
    url: string;
}

export interface IAsignaturas {
    id: number;
    nombre: string;
    tipo: string;
    horas: number;
}

export interface IAsignatura {
    nombre: string;
    tipo: string;
    horas: number;
}

export interface Iqrs {
    id: number;
    nombre: string; 
    fecha: string;
    materia: string;
    asistencia: [];
    
}

export interface Iqr {
    nombre: string;
    fecha: string;
    materia: string;
    asistencia: [];

}

export interface Iasistencias{
    id: number;
    nombre: string;
    hora: string;
}