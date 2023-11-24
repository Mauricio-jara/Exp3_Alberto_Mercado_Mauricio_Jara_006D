import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IEstudiante, IEstudiantes, IProfesor, IProfesores, IJuego, IJuegos, IAsignaturas, IAsignatura, Iqrs, Iqr} from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //ESTUDIANTES

  listarEstudiantes():Observable<IEstudiantes>{
    return this.httpClient.get<IEstudiantes>(`${environment.apiUrl}/estudiantes`);
  }

  CrearEstudiante(newEstudiante: IEstudiante):Observable<IEstudiante>{
    return this.httpClient.post<IEstudiantes>(`${environment.apiUrl}/estudiantes`, newEstudiante);
  }

  buscarEstudianteI(id: number):Observable<IEstudiantes>{
    return this.httpClient.get<IEstudiantes>(`${environment.apiUrl}/estudiantes/?id=${id}`);
  }

  buscarEstudianteC(correo: any):Observable<IEstudiantes>{
    return this.httpClient.get<IEstudiantes>(`${environment.apiUrl}/estudiantes/?correo=${correo}`);
  }

  actualizarEstudiante(estudiante: any):Observable<IEstudiante>{
    return this.httpClient.put<IEstudiante>(`${environment.apiUrl}/estudiantes/${(estudiante.id)}`, estudiante);
  }

  //PROFESORES

  listarProfesor():Observable<IProfesores>{
    return this.httpClient.get<IProfesores>(`${environment.apiUrl}/profesores`);
  }

  CrearProfesor(newEstudiante: IProfesor):Observable<IProfesor>{
    return this.httpClient.post<IProfesores>(`${environment.apiUrl}/profesores`, newEstudiante);
  }

  buscarProfesorI(id: number):Observable<IProfesores>{
    return this.httpClient.get<IProfesores>(`${environment.apiUrl}/profesores/?id=${id}`);
  }

  buscarProfesorC(correo: any):Observable<IProfesores>{
    return this.httpClient.get<IProfesores>(`${environment.apiUrl}/profesores/?correo=${correo}`);
  }

  actualizarProfesor(estudiante: any):Observable<IProfesor>{
    return this.httpClient.put<IProfesor>(`${environment.apiUrl}/profesores/${(estudiante.id)}`, estudiante);
  }

  //LOGIN

  logout() {
    sessionStorage.removeItem('correo');
    sessionStorage.removeItem('token');
  }

  getLoggedInUsername(): string | null {
    return sessionStorage.getItem('correo');
  }

  IsLoggedIn() {
    return sessionStorage.getItem('correo')!=null;
  }

  //JUEGOS

  listarJuegos():Observable<IJuegos>{
    return this.httpClient.get<IJuegos>(`${environment.apiUrl}/juegos`);
  }

  CrearJuego(newJuego: IJuego):Observable<IJuego>{
    return this.httpClient.post<IJuegos>(`${environment.apiUrl}/juegos`, newJuego);
  }

  buscarJuegoI(id: number):Observable<IJuegos>{
    return this.httpClient.get<IJuegos>(`${environment.apiUrl}/juegos/?id=${id}`);
  }

  buscarJuegoN(nombre: any):Observable<IJuegos>{
    return this.httpClient.get<IJuegos>(`${environment.apiUrl}/juegos/?nombre=${nombre}`);
  }

  actualizarJuego(juego: any):Observable<IJuegos>{
    return this.httpClient.put<IJuegos>(`${environment.apiUrl}/juegos/${(juego.id)}`, juego);
  }

  eliminarJuego(juego: any):Observable<IJuegos>{
    return this.httpClient.delete<IJuegos>(`${environment.apiUrl}/juegos/${(juego.id)}`);
  }


  //ASIGNATURAS

  listarAsignaturasPorProfesor(id: number):Observable<IAsignaturas>{
    return this.httpClient.get<IAsignaturas>(`${environment.apiUrl}/profesores/?id=${id}/asignaturas`);
  }

  crearAsignatura(newAsignatura: IAsignatura, id: number):Observable<IAsignatura>{
    return this.httpClient.post<IAsignaturas>(`${environment.apiUrl}/profesores/${id}/asignaturas`, newAsignatura);
  }

  buscarAsignaturaI(idProfe: number, idAsig: number):Observable<IAsignaturas>{
    return this.httpClient.get<IAsignaturas>(`${environment.apiUrl}/profesores/${idProfe}/asignaturas/?id=${idAsig}`);
  }

  actualizarAsignatura(asignatura: any, id: number):Observable<IAsignatura>{
    return this.httpClient.put<IAsignatura>(`${environment.apiUrl}/profesores/${id}/asignaturas/${(asignatura.id)}`, asignatura);
  }

  //qr

  crearQr(newQr: Iqr):Observable<Iqr>{
    return this.httpClient.post<Iqrs>(`${environment.apiUrl}/qr`, newQr);
  }
}
