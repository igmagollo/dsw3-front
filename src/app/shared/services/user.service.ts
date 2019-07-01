import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string = undefined;
  private username: string = undefined;
  private role: string = undefined;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(api + 'user', { username, password });
  }

  initialize(res) {
    this.token = res.access_token;
    this.username = res.username;
    this.role = res.roles[0];
  }

  get loggedIn(): boolean {
    return !!this.token;
  }

  logout() {
    this.token = undefined;
    this.role = undefined;
    this.username = undefined;
  }
}
