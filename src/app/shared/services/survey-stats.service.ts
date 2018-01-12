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
export class SurveyStatsService extends GenericService {
  

  constructor(private http: Http, private storageService: StorageService) {
    super();
   
  }

  getRespPercentages_Quest(surveyId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/statistiques/" + surveyId +"/respPercentages";

    return this.http.get(url, {
        headers: this.headers
      })
        .map(res => res.json())
        .catch(this.handleErrors);
    }

  dashboard(userId) {
      this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
      const url = Config.baseUrl + "/dashboard/"+ userId;
  
      return this.http.get(url, {
        headers: this.headers
      })
        .map(res => res.json())
        .catch(this.handleErrors);
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






}
