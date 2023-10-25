import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEstudiante } from '../interfaces/interfaces';
import { IEstudiantes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpClient: HttpClient) { }

  listarEstudiantes():Observable<IEstudiantes>{
    return this.httpClient.get<IEstudiantes>(`${environment.apiUrl}/estudiantes`);
  }

  agregarEstudiante(newEstudiante: IEstudiante):Observable<IEstudiantes>{
    return this.httpClient.post<IEstudiantes>(`${environment.apiUrl}/estudiantes`, newEstudiante);
  }

  buscarEstudiante(id: number):Observable<IEstudiantes>{
    return this.httpClient.get<IEstudiantes>(`${environment.apiUrl}/estudiantes/?id=${id}`);
  }

  actualizarEstudiante(estudiante: any):Observable<IEstudiantes>{
    return this.httpClient.put<IEstudiantes>(`${environment.apiUrl}/estudiantes/${(estudiante.id)}`, estudiante);
  }
}
