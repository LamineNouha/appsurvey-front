import {Http} from '@angular/http';
import {GenericService} from './generic.service';
import {Config} from '../config';
import {Injectable} from '@angular/core';
import {Credentials} from "../models/credentials";
import {StorageService} from "./storage.service";


@Injectable()
export class AuthService extends GenericService {

  constructor(private http: Http, private stoarageService: StorageService) {
    super();
  }


  login(credentials: Credentials) {
    const url = Config.baseUrl + '/users/auth/signin';
    console.log("email" , JSON.stringify(credentials));
    return this.http.post(url, JSON.stringify({
      "email": credentials.email,
      "password": credentials.password
    }), {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }


  register(credentials: Credentials) {
    const url = Config.baseUrl + '/users/auth/signup';
    console.log("email" , JSON.stringify(credentials));
    return this.http.post(url, JSON.stringify({
      "email": credentials.email,
      "password": credentials.password
    }), {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }


  isLoggedIn() {
    return this.stoarageService.read("token") != null;
  }

}
