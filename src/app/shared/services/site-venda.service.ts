import { Injectable } from '@angular/core';
import {Api} from '../classes/api';
import {SiteVenda} from '../models/site-venda';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteVendaService {
  private api: Api<SiteVenda>;
  constructor(private user: UserService,
              private http: HttpClient) {
    this.api = new Api<SiteVenda>(this.http, this.user, 'site');
  }

  index(): Observable<SiteVenda[]> {
    return this.api.index();
  }

  get(id: string): Observable<SiteVenda> {
    return this.api.get(id);
  }

  save(site: SiteVenda) {
    return this.api.save(site);
  }

  update(site: SiteVenda) {
    return this.api.update(site);
  }

  delete(id: string) {
    return this.api.delete(id);
  }
}
