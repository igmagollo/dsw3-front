import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Api} from '../classes/api';
import {Promocao} from '../models/promocao';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  private api: Api<Promocao>;
  constructor(private user: UserService,
              private http: HttpClient) {
    this.api = new Api<Promocao>(this.http, this.user, 'promocao');
  }

  index(): Observable<Promocao[]> {
    return this.api.index();
  }

  get(id: string): Observable<Promocao> {
    return this.api.get(id);
  }

  save(promocao: Promocao) {
    return this.api.save(promocao);
  }

  update(promocao: Promocao) {
    return this.api.update(promocao);
  }

  delete(id: string) {
    return this.api.delete(id);
  }
}
