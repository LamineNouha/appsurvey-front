import { Component, OnInit, SimpleChanges, SimpleChange,Output, EventEmitter ,ChangeDetectorRef} from '@angular/core';
import {Router} from "@angular/router";
import {Survey} from '../../shared/models/survey.model';
import {Question} from '../../shared/models/survey.model';
import {QuestionService} from "../../shared/services/question.service";
import {StorageService} from "../../shared/services/storage.service";
import { SurveyStatsService } from 'app/shared/services/survey-stats.service';
import { Subscription } from 'rxjs';
import {Http} from '@angular/http';



@Component({
  selector: 'app-detail-stat',
  templateUrl: './detail-stat.component.html',
  styleUrls: []
})
export class AppStatComponent implements OnInit {
    questions: Question[];
    survey: Survey;
    surveyId: string;
    selectedRow : Number;
    percent_tab: any[];
    sex_tab: any[]=[0,0];
    total:Number;

    //this is to send when table ine is selected
   doughnutChartLabels:string[];
  doughnutChartData:number[];
  busy: Subscription;
  


  constructor(private ref:ChangeDetectorRef,private router: Router,private surveyStatsService: SurveyStatsService,private storageService: StorageService, private http: Http) { 
   
    this.busy = this.http.get('...').subscribe();

    

  }

  ngOnInit() {
    
   

    
    
    const baseContext = this;
    
   
    var url_components :string []=this.router.url.split('/');
    this.surveyId=url_components[2];
    console.log("id of survey to show stats details: "+url_components[2]);
    

     this.survey= this.storageService.read<Survey>('currentSurvey');
     //console.log("surveyID to show stats: "+this.surveyId);
     
     //initialise the survey questions
     for (var i = 0; i < this.storageService.read<Survey>('currentSurvey').questions.length; i++) {
        this.survey.questions[i]=this.storageService.read<Survey>('currentSurvey').questions[i];
          
     }

     this.getStatsFromServer(0);
     //this.onClickRaw(0);

    console.log("labels** "+JSON.stringify(this.doughnutChartLabels));

   

    
  }


   getStatsFromServer(index){
    

    const baseContext = this;
    this.surveyStatsService.getRespPercentages_Quest(this.surveyId).subscribe(data => {
      this.percent_tab = new Array();
      this.percent_tab = data.questions;
      this.total = data.total_answering_per;
      this.sex_tab = data.sex;


      
     this.onClickRaw(index);
   
    


    

   }, error => {

   });



}

onClickRaw(index)
{
  this.selectedRow = index;
  console.log("iter num "+index);

  this.doughnutChartLabels = new Array();
  for (var i = 0; i < this.storageService.read<Survey>('currentSurvey').questions[index].responses.length; i++) {
    
    this.doughnutChartLabels.push(this.survey.questions[index].responses[i].choice);
      
 }

 this.doughnutChartData= this.percent_tab[index];
 console.log("labels** "+JSON.stringify(this.doughnutChartLabels));
 console.log("datas** "+JSON.stringify(this.doughnutChartData));

}





  /*loadAllQuestions() {
    const baseContext = this;
     this.questionService.getAll(this.survey.id).subscribe(data => {
      this.questions = data;
      console.log("survey "+JSON.stringify(data));
      setTimeout(function () {
        
      }, 100);


     
    }, error => {

    });

      
  }*/
  
}
