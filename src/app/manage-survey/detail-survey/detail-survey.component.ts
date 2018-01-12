import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators ,AbstractControl, FormControl} from '@angular/forms';
import {Survey} from '../../shared/models/survey.model';
import {Question} from '../../shared/models/survey.model';
import {Response} from '../../shared/models/survey.model';
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../shared/services/storage.service";



import {SurveyService} from "../../shared/services/survey.service";
import {QuestionService} from "../../shared/services/question.service";
import {ResponseService} from "../../shared/services/response.service";
import {Subscription} from "rxjs/Subscription";
import {Http} from '@angular/http';
import {BusyModule} from 'angular2-busy';
declare let swal: any;

@Component({
  selector: 'app-detail-survey',
  templateUrl: './detail-survey.component.html',
  styleUrls: []
})
export class DetailSurveyComponent implements OnInit {

survey: Survey;
surveyId: string;
busy: Subscription;
public myForm: FormGroup;

constructor(private _fb: FormBuilder,private surveyService: SurveyService,private questionService: QuestionService,private responseService: ResponseService, private router: Router, private route: ActivatedRoute, private http: Http,private storageService: StorageService) { 
      this.busy = this.http.get('...').subscribe();
     
      const baseContext = this;

    
     
}

   ngOnInit() {


 this.myForm= this._fb.group([]);

    
 


        var url_components :string []=this.router.url.split('/');
        this.surveyId=url_components[2];
        console.log("id of survey to show details: "+url_components[2]);
    
     
         this.survey= this.storageService.read<Survey>('currentSurvey');
         console.log("surveyID to edit: "+this.surveyId);
         
         //initialise the survey questions
         for (var i = 0; i < this.storageService.read<Survey>('currentSurvey').questions.length; i++) {
            this.survey.questions[i]=this.storageService.read<Survey>('currentSurvey').questions[i];
              
         }
        
     
         //initialise the formgroup
          this.myForm = this._fb.group({
             _id:[this.survey.id,[]],
             title: [this.survey.title, [Validators.required, Validators.minLength(5)]],
             questions: this.initQuestion(this.survey.questions.length),
            
             
         });
      console.log("***********=formgroup-final=====***** "+JSON.stringify(this.myForm.value));
     

      
    
  

}

initQuestion(nbq:number) {
    var a:FormArray= this._fb.array([]);
   
    for (var i = 0; i < nbq; i++) {
        
       
        a.insert(i, this._fb.group({_id: [this.survey.questions[i].id,[]],
            content: [this.survey.questions[i].content, [Validators.required]],
            survey:[this.survey.questions[i].survey,[]],
            responses: this.initResponse(i,this.survey.questions[i].responses.length),
        })
    );
   
    }

    
    return a;
}

    initResponse(q:number,nbq:number) {
        var a:FormArray= this._fb.array([]);
       
          
            for (var i = 0; i < nbq; i++) {
                a.insert(i,this._fb.group({_id: [this.survey.questions[q].responses[i].id,[]],
                    choice: [this.survey.questions[q].responses[i].choice,[Validators.required]],
                    question:[this.survey.questions[q].id],
                    
                })
            )
                
          }
    return a;
    }

    editSurvey() {
      //console.log("the edited survey : "+JSON.stringify(survey));
      this.storageService.write('currentSurvey', this.survey);
      this.router.navigate(['survey/' + this.surveyId + "/edit"]);
    }
    




}
