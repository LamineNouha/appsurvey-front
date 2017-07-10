import {EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Questionnaire } from '../../shared/models/questionnaire.model';
import { Config } from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuestionnaireService {
  refreshHeroes$: EventEmitter<any>;
   private headers = new Headers({ 'Content-Type': 'application/json' });
 private _URL:string = "/questionnaires";
 private BASE_URL:string = Config.baseUrl.concat(this._URL);
  constructor(private _http: Http) { }

cerate(questionnaire :Questionnaire){
return this._http.post("/questionnaires", questionnaire).map(data => data.json()).toPromise()

}

destroy(questionnaire :Questionnaire){
return this._http.delete("/questionnaires/"+questionnaire._id).map(data => data.json()).toPromise()

}

update(questionnaire :Questionnaire){
return this._http.put("/questionnaires/"+questionnaire._id,questionnaire).map(data => data.json()).toPromise()


}

/*getQuestionnaires(){
return this._http.get("/questionnaires").map(data => data.json()).toPromise()


}*/
 /* getQuestionnaires(): Promise<Questionnaire[]> {
    return this._http.get(this.BASE_URL)
      .toPromise()
      .then(response => response.json().data as Questionnaire[])
      .catch(this.handleError);
  }
*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


getQuestionnaires(){
return this._http.get(this.BASE_URL)
.map((res:Response) => res.json())
.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}



 /* getQuestionnaires(): Observable<any> {
    return this._http.get(this.BASE_URL).map(res => res.json());
  }
*/
}
