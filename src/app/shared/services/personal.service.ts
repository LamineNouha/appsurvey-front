import {StorageService} from "app/shared/services/storage.service";
import {GenericService} from "./generic.service";
import {Personal} from "../models/personal.model";

import {EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Config } from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class PersonalService extends GenericService {
  loggedPersonal: Personal;

  constructor(private http: Http, private storageService: StorageService) {
    super();
    this.loggedPersonal = <Personal> storageService.read('personal');
  }

/*getPersonalById(personalId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/personals/" + personalId;

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }
  */

 getAll() {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/users/" + "listPer";


    

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

    deleteOne(personalId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/users/" + personalId;

    return this.http.delete(url, {
      headers: this.headers
    })
      .map(res => res.json()
    )
      .catch(this.handleErrors);
  }

    add(personal: Personal) {
    var id;
    
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/users/auth/signupPer";
    console.log(url);
     return this.http.post(url,
      personal, {
        headers: this.headers
      })
      .map(res => res.json())
    
      .catch(this.handleErrors);

   
  }
}
