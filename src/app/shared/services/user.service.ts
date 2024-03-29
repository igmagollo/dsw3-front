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
    return this.http.post(api + 'api/login', { username, password });
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

  getRole() {
    return this.role;
  }

  getToken() {
    return this.token;
  }

  getUsername() {
    return this.username;
  }
}
