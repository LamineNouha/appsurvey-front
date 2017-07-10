import {Component, OnInit,OnChanges,Input} from '@angular/core';
import {Questionnaire} from '../../shared/models/questionnaire.model';
import {QuestionnaireService} from '../../shared/services/questionnaire.service';
import {Observable} from 'rxjs/Rx';
import { EmitterService } from '../../shared/services/emitter.service';




@Component({
  selector: 'app-list-questionnaire',
  templateUrl: './list-questionnaire.component.html',
  styleUrls: ['./list-questionnaire.component.css']
})
export class ListQuestionnaireComponent implements OnInit {
  questionnaires: Questionnaire[]= [new Questionnaire(1,"election1",45),new Questionnaire(2,"election2",60)];

 
 @Input() questionnaireInfo: string;
	@Input() questionnaireList: string;
	private questionnairesList;
	private currentQuestionnaire:Questionnaire;
  
  constructor( private _questionnaireService: QuestionnaireService) {

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

   public questionnaireSelected(questionnaire){		
		this.currentQuestionnaire = questionnaire;
		EmitterService.get(this.questionnaireInfo).emit(this.currentQuestionnaire);
	}

  	public isSelected(questionnaire): boolean {
		if(!this.currentQuestionnaire) {
			return false;
		}
		return this.currentQuestionnaire._id ===  questionnaire._id ? true : false;
	}
}
