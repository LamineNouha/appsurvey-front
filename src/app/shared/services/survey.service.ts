import {StorageService} from "app/shared/services/storage.service";
import {GenericService} from "./generic.service";
import {Survey} from "../models/survey.model";
import {FormGroup} from '@angular/forms';


import {EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Config } from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class SurveyService extends GenericService {
  

  constructor(private http: Http, private storageService: StorageService) {
    super();
   
  }

  getSurveyById(surveyId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/surveys/" + surveyId;

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

 getAll(userId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/surveys/"+ userId;

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

    deleteOne(surveyId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/surveys/" + surveyId;

    return this.http.delete(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  add(survey: FormGroup) {
    var id;
    
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/surveys";
    console.log(url);
     return this.http.post(url,
      survey, {
        headers: this.headers
      })
      .map(res => res.json())
    
      .catch(this.handleErrors);

  }
/*
  modify(surveyId: string,survey: FormGroup) {
    var id;
    
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/surveys/" + surveyId + "/edit";
    console.log(url);
     return this.http.post(url,
      survey, {
        headers: this.headers
      })
      .map(res => res.json())
    
      .catch(this.handleErrors);

  }*/



}
