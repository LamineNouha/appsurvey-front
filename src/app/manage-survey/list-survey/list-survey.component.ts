import {Component, OnInit,OnChanges,Input} from '@angular/core';
import {Survey, Question, Response} from '../../shared/models/survey.model';
import {SurveyService} from '../../shared/services/survey.service';
import {Observable} from 'rxjs/Rx';






@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: []
})
export class ListSurveyComponent implements OnInit {
 q:Question[];
first: string ="Questionnaire";
second: string ="Liste de questionnaires";
second_url: string ="/surveys";
second_bool:any =true;

surveys: Survey[]= [new Survey(1,"election1",this.q),new Survey(2,"election2",this.q)];

 
 
  
  constructor( private _surveyService: SurveyService) {

  }

  ngOnInit() {
   //this.getQuestionnaires();
   //this.questionnaires[0]= new Questionnaire(1,"election1",45);
     //this.questionnaires[1]= new Questionnaire(2,"election2",55);  
   /* this._questionnaireService.getQuestionnaires().subscribe(
                       response => this.questionnaires = response,
                       error=>  { alert(`Erreur de récupération des films`); }
                    );*/

                   // console.error(Object.keys(this.questionnaires).length);
  }

/*getQuestionnaires(): void {
    this._questionnaireService.getQuestionnaires().then((questionnaires) => {
      this.questionnaires = questionnaires;
      localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
    });
  }*/




    /*getQuestionnaires() {
    this._questionnaireService.getQuestionnaires().subscribe(
      data => this.questionnaires = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }*/

  /* public questionnaireSelected(questionnaire){		
		this.currentQuestionnaire = questionnaire;
		EmitterService.get(this.questionnaireInfo).emit(this.currentQuestionnaire);
	}

  	public isSelected(questionnaire): boolean {
		if(!this.currentQuestionnaire) {
			return false;
		}
		return this.currentQuestionnaire.id ===  questionnaire.id ? true : false;
	}*/
}
