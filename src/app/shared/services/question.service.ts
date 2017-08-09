import {StorageService} from "app/shared/services/storage.service";
import {GenericService} from "./generic.service";
import {Question} from "../models/survey.model";

import {EventEmitter, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Config } from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class QuestionService extends GenericService {
  

  constructor(private http: Http, private storageService: StorageService) {
    super();
   
  }

  getResponseById(questionId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/questions/" + questionId;

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

 getAll() {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/questions";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

    deleteOne(questionId: number) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/questions/" + questionId;

    return this.http.delete(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  add(question: Question) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/questions";
 console.log(url);
    return this.http.post(url,
      question, {
        headers: this.headers
      })
      .map(res => res.json())
      .catch(this.handleErrors);
  }
}
