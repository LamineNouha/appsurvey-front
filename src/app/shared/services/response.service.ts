import {StorageService} from "app/shared/services/storage.service";
import {GenericService} from "./generic.service";
import {Response} from "../models/survey.model";

import {EventEmitter, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Config } from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ResponseService extends GenericService {
  

  constructor(private http: Http, private storageService: StorageService) {
    super();
   
  }

  getResponseById(responseId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/responses/" + responseId;

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

 getAll() {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/responses";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

    deleteOne(responseId: number) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/responses/" + responseId;

    return this.http.delete(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  add(response: Response) {
   
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/responses";
    console.log(url);
    return this.http.post(url,
      response, {
        headers: this.headers
      })
      .map(res => res.json())
      .catch(this.handleErrors);
  }
}
