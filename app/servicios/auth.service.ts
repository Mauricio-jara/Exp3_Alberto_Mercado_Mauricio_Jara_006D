import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Usuarios } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  GetAllUsers():Observable<Usuarios> {
    return this.httpClient.get<Usuarios>(`${environment.apiUrl}/usuarios`);
  }

  GetUserById(codigo: any):Observable<Usuarios> {
    return this.httpClient.get<Usuarios>(`${environment.apiUrl}/usuarios/?correo=${codigo}`);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('correo')!=null;
  }

  GetUserRole() {
    return sessionStorage.getItem('rol')!=null?sessionStorage.getItem('rol')?.toString():'';
  }

  logout() {
    sessionStorage.removeItem('correo');
    sessionStorage.removeItem('token');
  }

  getLoggedInUsername(): string | null {
    return sessionStorage.getItem('correo');
  }

}
