import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  private groupURL = 'http://localhost:8080/Server/api/groups';

  private headers = new HttpHeaders().set(
    'Authorization',
    'Bearer ' + sessionStorage.getItem('auth')
  );
  getActivites(id: any) {
    return this.http.get(`${this.groupURL}/${id}/activities`, {headers: this.headers});
  }

  addActivity(id: any, activity: any) {
    return this.http.post(`${this.groupURL}/${id}/activities`, activity, {
      observe: 'response',  headers: this.headers 
    });
  }

  deleteActivity(id: any, idA: any) {
    return this.http.delete(`${this.groupURL}/${id}/activities/${idA}`, {
      observe: 'response', headers: this.headers 
    });
  }
}
