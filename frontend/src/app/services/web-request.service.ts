// Handles all web request logic
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }

  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  // part of transmitted data that is the actual intended message
  post(uri: String, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: String, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: String){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
