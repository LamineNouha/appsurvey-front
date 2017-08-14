import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Personal} from '../../shared/models/personal.model';
import {PersonalService} from "../../shared/services/personal.service";
import { EmailValidators } from 'ngx-validators';
import {Subscription} from "rxjs/Subscription";
import {Http} from '@angular/http';
import {Router, ActivatedRoute} from "@angular/router";
import {BusyModule} from 'angular2-busy';
declare let swal: any;

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html',
  styleUrls: []
})
export class AddPersonalComponent implements OnInit {
first: string ="Personal";
second: string ="Ajouter un personnel";
second_url: string ="/personals/add";
second_bool:any =true;


 personal: Personal;
 busy: Subscription;
 public myForm: FormGroup;

constructor(private _fb: FormBuilder,private personalService: PersonalService,private route: ActivatedRoute,
  private router: Router, private http: Http) { 
      this.busy = this.http.get('...').subscribe();
}
 email = new FormControl('', [Validators.compose([EmailValidators.simple]),Validators.required]);
   ngOnInit() {
    const baseContext = this;
        this.myForm = this._fb.group({
           email: this.email,
            
          
        });
    }
 

save(myForm: FormGroup) {
  const baseContext = this;
   this.personal= myForm.value;
   console.log(JSON.stringify(this.personal) );
    
   //add personal 
   this.busy = this.personalService.add(this.personal)
        .subscribe(
          (data) => {
            console.log("swal");
            swal({
              title: "Succés!",
              text: 'Personnel ajouté avec succés',
              confirmButtonColor: "#66BB6A",
              type: "success",
              closeOnConfirm: false,
              showLoaderOnConfirm: true,
            
           
}).then (function () {

  baseContext.router.navigate(["/personal/list"]);
            
       
        }, function(dismiss){
          
      });
            

          }
        );
}
}