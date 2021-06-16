import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class XkcdService {

  constructor(private http: HttpClient) { }

  getComic(id) {
    let validatedId = isNaN(id) ? 'last' : parseInt(id)

    return this.http.get(`https://wvcode-persona-api.herokuapp.com/xkcd/${validatedId}`)
  }

}
