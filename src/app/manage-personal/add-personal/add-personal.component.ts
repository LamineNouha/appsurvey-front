import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Personal} from '../../shared/models/personal.model';
import {PersonalService} from "../../shared/services/personal.service";
import { EmailValidators } from 'ngx-validators';
import {Subscription} from "rxjs/Subscription";
import {Http} from '@angular/http';
import {Router, ActivatedRoute} from "@angular/router";
import {BusyModule} from 'angular2-busy';
import {StorageService} from "../../shared/services/storage.service";
import {User} from "../../shared/models/user.model";
declare let swal: any;

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html',
  styleUrls: []
})
export class AddPersonalComponent implements OnInit {
user:User;


 personal: Personal;
 busy: Subscription;
 public myForm: FormGroup;

constructor(private storageService: StorageService, private _fb: FormBuilder,private personalService: PersonalService,private route: ActivatedRoute,
  private router: Router, private http: Http) { 
      this.busy = this.http.get('...').subscribe();

      this.user= <User>storageService.read('user');
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


   this.personal= new Personal('',myForm.controls.email.value,this.user._id);
  
   console.log(JSON.stringify(this.personal) );
   console.log("idddddd uder: "+ this.user._id);
    
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