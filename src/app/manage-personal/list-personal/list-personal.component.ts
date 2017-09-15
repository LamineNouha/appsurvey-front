import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PersonalService} from "../../shared/services/personal.service";
import {Personal} from '../../shared/models/personal.model';
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Http} from '@angular/http';
import {BusyModule} from 'angular2-busy';
import {StorageService} from "../../shared/services/storage.service";
import {User} from "../../shared/models/user.model";
declare let swal: any;

declare var jQuery: any;
declare var PNotify: any;

@Component({
  selector: 'app-list-Personal',
  templateUrl: './list-Personal.component.html',
  styleUrls: []
})
export class ListPersonalComponent implements OnInit {
user: User;



  
  personals: Array<Personal>;
  busy: Subscription;

  @ViewChild("DatatableBasic") dataTable: ElementRef;

  constructor(private storageService: StorageService, private personalService: PersonalService, private router: Router, private http: Http) {
  this.busy = this.http.get('...').subscribe();

  this.user= <User>storageService.read('user');
  }

  ngOnInit(): void {
    this.loadAllPersonals();
   
  }

  loadAllPersonals() {
    const baseContext = this;
    this.personalService.getAll(this.user._id).subscribe(data => {
      this.personals = data;
    
    }, error => {

    });
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
            text: "Vous avez annulé cette action",
            confirmButtonColor: "#2196F3",
            type: "error"
          });
        }
      });
         }
  }

