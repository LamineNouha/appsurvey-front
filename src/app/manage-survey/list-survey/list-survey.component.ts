import {Survey, Question, Response} from '../../shared/models/survey.model';
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {SurveyService} from "../../shared/services/survey.service";
import {Personal} from '../../shared/models/personal.model';
import {Router} from "@angular/router";
import {Http} from '@angular/http';
import {Subscription} from "rxjs/Subscription";
import {StorageService} from "../../shared/services/storage.service";
import {User} from "../../shared/models/user.model";
declare var jQuery: any;
declare var PNotify: any;
declare var swal: any;



@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: []
})
export class ListSurveyComponent implements OnInit {
 q:Question[];
 user: User;


 surveys : Array<Survey>;
  busy: Subscription;

  @ViewChild("DatatableBasic") dataTable: ElementRef;

  constructor(private surveyService: SurveyService, private router: Router,private storageService: StorageService, private http: Http) {
    this.busy = this.http.get('...').subscribe();
    this.user= <User>storageService.read('user');

  }

  ngOnInit(): void {
    //removing currentSurvey from strorage to avoid problems
    this.storageService.remove('currentSurvey');
    
    this.loadAllSurveys();
    
  }

  loadAllSurveys() {
    const baseContext = this;
     this.surveyService.getAll(this.user._id).subscribe(data => {
      this.surveys = data;
      console.log("survey "+JSON.stringify(data));
      setTimeout(function () {
        
      }, 100);


      for (var i = 0; i < data.length; i++) {
      
       for (var j = 0; j < data[i].questions.length; j++) {
        this.surveys[i].questions[j]=data[i].questions[j];
       
       }

      }
    }, error => {

    });

      
  }

  

  editSurvey(index, surveyId) {
    this.storageService.write('currentSurvey', this.surveys[index]);
    this.router.navigate(['survey/' + surveyId + "/edit"]);
  }

  detailSurvey(index, surveyId) {
    this.storageService.write('currentSurvey', this.surveys[index]);
    this.router.navigate(['survey/' + surveyId + "/detail"]);
  }

  deleteSurvey(index, surveyId) {
    const baseContext = this;
    swal({
        title: "Vous êtes sûr?",
        text: "Ce questionnaire va être supprimé définitivement!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#EF5350",
        confirmButtonText: "Oui, supprimer!",
        cancelButtonText: "Non, annuler!",
        closeOnConfirm: false,
        closeOnCancel: false
      }).then (function () {
        
          baseContext.busy = baseContext.surveyService.deleteOne(surveyId).subscribe(data => {
            baseContext.surveys.splice(index, 1);
            swal({
              title: "Supprimé!",
              text: "Ce questionnaire est supprimé.",
              confirmButtonColor: "#66BB6A",
              type: "success"
            });
          }, error => {

          });
        }, function(dismiss){
          if (dismiss === 'cancel') {
     
          swal({
            title: "Annulé",
            text: "Vous avez annuler cette action",
            confirmButtonColor: "#2196F3",
            type: "error"
          });
        }
      });
         }
}
