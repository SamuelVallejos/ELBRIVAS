import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  apiURLuser = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos/users';
  apiURLvehiculo = 'https://my-json-server.typicode.com/victorrosendo/repoListadoAutos/autos';



  //Get con filtro
  //getPost(id): Observable<any> {
    //return this.http.get(this.apiURL + '/posts/' + id).pipe(
      //retry(3)
    //);
  //}
  
  constructor(private http: HttpClient) { }
  
  getPostsuser(): Observable<any> {
    return this.http.get(this.apiURLuser).pipe(
      retry(3)
    );
  }

  getPostsvehiculo(): Observable<any> {
    return this.http.get(this.apiURLvehiculo).pipe(
      retry(3)
    );
  }
  
}
