import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  callPersona() {
    return this.http.get('https://wvcode-persona-api.herokuapp.com/')
  }

}
