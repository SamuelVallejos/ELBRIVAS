import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
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

  apiURLuser = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';
  apiURLvehiculo = 'https://my-json-server.typicode.com/victorrosendo/repoListadoAutos';

  constructor(private http: HttpClient) { }
  
  getPostsuser(): Observable<any> {
    return this.http.get(this.apiURLuser+'/users/').pipe(
      retry(3)
    );
  }

  getPostsvehiculo(): Observable<any> {
    return this.http.get(this.apiURLvehiculo+'/autos/').pipe(
      retry(3)
    );
  }
  
}
