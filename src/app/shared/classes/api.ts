import {UserService} from '../services/user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {api} from '../config';
import {Observable} from 'rxjs';

export class Api<T> {
  constructor(private http: HttpClient, private user: UserService, private route: string) { }

  index(): Observable<T[]> {
    return this.http.get(api + this.route,
      { headers: new HttpHeaders().append('authorization', 'Bearer ' + this.user.getToken())}
      ) as Observable<T[]>;
  }

  get(id: string): Observable<T> {
    return this.http.get(api + this.route + '/' + id,
      { headers: new HttpHeaders().append('authorization', 'Bearer ' + this.user.getToken())}
      ) as Observable<T>;
  }

  save(object: T) {
    return this.http.post(api + this.route, JSON.stringify(object),
      { headers: new HttpHeaders().append('authorization', 'Bearer ' + this.user.getToken())});
  }

  update(object: any) {
    return this.http.put(api + this.route + '/' + object.id, JSON.stringify(object),
      { headers: new HttpHeaders().append('authorization', 'Bearer ' + this.user.getToken())});
  }

  delete(id: string) {
    return this.http.delete(api + this.route + '/' + id,
      { headers: new HttpHeaders().append('authorization', 'Bearer ' + this.user.getToken())});
  }
}
