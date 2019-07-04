import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SalaTeatro} from '../models/sala-teatro';
import {Api} from '../classes/api';

@Injectable({
  providedIn: 'root'
})
export class SalaTeatroService {
  private api: Api<SalaTeatro>;
  constructor(private user: UserService,
              private http: HttpClient) {
    this.api = new Api<SalaTeatro>(this.http, this.user, 'teatro');
  }

  index(): Observable<SalaTeatro[]> {
    return this.api.index();
  }

  get(id: string): Observable<SalaTeatro> {
    return this.api.get(id);
  }

  save(teatro: SalaTeatro) {
    return this.api.save(teatro);
  }

  update(teatro: SalaTeatro) {
    return this.api.update(teatro);
  }

  delete(id: string) {
    return this.api.delete(id);
  }
}
