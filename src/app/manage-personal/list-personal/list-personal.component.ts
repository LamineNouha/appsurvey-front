import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PersonalService} from "../../shared/services/personal.service";
import {Personal} from '../../shared/models/personal.model';
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Http} from '@angular/http';
import {BusyModule} from 'angular2-busy';
declare let swal: any;

declare var jQuery: any;
declare var PNotify: any;

@Component({
  selector: 'app-list-Personal',
  templateUrl: './list-Personal.component.html',
  styleUrls: []
})
export class ListPersonalComponent implements OnInit {
first: string ="Personnel";
second: string ="Liste de personnels";
second_url: string ="/personals";
second_bool:any =true;



  
  personals: Array<Personal>;
  busy: Subscription;

  @ViewChild("DatatableBasic") dataTable: ElementRef;

  constructor(private personalService: PersonalService, private router: Router, private http: Http) {
  this.busy = this.http.get('...').subscribe();
  }

  ngOnInit(): void {
    this.loadAllPersonals();
    this.busy = this.http.get('...').subscribe();
  }

  loadAllPersonals() {
    const baseContext = this;
    this.busy = this.personalService.getAll().subscribe(data => {
      this.personals = data;
      setTimeout(function () {
        baseContext.initializeListPersonalDataTables();
      }, 100);
    }, error => {

    });
  }

  initializeListPersonalDataTables() {
    // Basic datatable
    const tableListStation = jQuery('.datatable-basic');
    tableListStation.DataTable();
  }

  deletePersonal(index, personalId) {
    const baseContext = this;
    swal({
        title: "Vous êtes sûr?",
        text: "Ce personnel va être supprimé définitivement!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#EF5350",
        confirmButtonText: "Oui, supprimer!",
        cancelButtonText: "Non, annuler!",
        closeOnConfirm: false,
        closeOnCancel: false
      }).then (function () {
        
          baseContext.busy = baseContext.personalService.deleteOne(personalId).subscribe(data => {
            baseContext.personals.splice(index, 1);
            swal({
              title: "Supprimé!",
              text: "Ce personnel est supprimé.",
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

