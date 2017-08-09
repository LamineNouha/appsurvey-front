import {Survey, Question, Response} from '../../shared/models/survey.model';
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {SurveyService} from "../../shared/services/survey.service";
import {Personal} from '../../shared/models/personal.model';
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
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
first: string ="Questionnaire";
second: string ="Liste de questionnaires";
second_url: string ="/surveys";
second_bool:any =true;

 surveys : Array<Survey>;
  busy: Subscription;

  @ViewChild("DatatableBasic") dataTable: ElementRef;

  constructor(private surveyService: SurveyService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadAllSurveys();
  }

  loadAllSurveys() {
    const baseContext = this;
    this.busy = this.surveyService.getAll().subscribe(data => {
      this.surveys = data;
      setTimeout(function () {
        baseContext.initializeListSurveyDataTables();
      }, 100);
    }, error => {

    });
  }

  initializeListSurveyDataTables() {
    // Basic datatable
    const tableListStation = jQuery('.datatable-basic');
    tableListStation.DataTable();
  }
/*
  editBanque(index, banqueId) {
    this.banqueService.currentBanque = this.banques[index];
    this.router.navigate(['banque/' + banqueId + "/edit"]);
  }

  validerBanque(index, banqueId) {
    this.banqueService.currentBanque = this.banques[index];
    this.router.navigate(['banque/' + banqueId + "/edit"]);
  }
*/
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
