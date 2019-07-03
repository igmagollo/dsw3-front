import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {api} from '../config';
import {Observable} from 'rxjs';
import {SalaTeatro} from '../models/sala-teatro';

@Injectable({
  providedIn: 'root'
})
export class SalaTeatroService {

  constructor(private user: UserService,
              private http: HttpClient) { }

  all(): Observable<SalaTeatro[]> {
    return this.http.get(api + 'teatro') as Observable<SalaTeatro[]>;
  }

  get(id: string): Observable<SalaTeatro> {
    return this.http.get(api + 'teatro/' + id) as Observable<SalaTeatro>;
  }

  delete(id: string) {
    return  this.http.delete(api + 'teatro/' + id,
      { headers: new HttpHeaders().append('authorization', 'Bearer ' + this.user.getToken())});
  }
}
