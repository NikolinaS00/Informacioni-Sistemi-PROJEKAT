import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  private groupURL = 'http://10.99.145.167:8080/Server/api/groups';

  getActivites(id: any) {
    return this.http.get(`${this.groupURL}/${id}/activities`);
  }

  addActivity(id: any, activity: any) {
    return this.http.post(`${this.groupURL}/${id}/activities`, activity, {
      observe: 'response',
    });
  }

  deleteActivity(id: any, idA: any) {
    return this.http.delete(`${this.groupURL}/${id}/activities/${idA}`, {
      observe: 'response',
    });
  }
}
