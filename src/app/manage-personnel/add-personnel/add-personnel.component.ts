import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Personnel} from '../../shared/models/personnel.model';
import { EmailValidators } from 'ngx-validators';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent implements OnInit {
first: string ="Personnel";
second: string ="Ajouter un personnel";
second_url: string ="/personnels/add";
second_bool:any =true;
 public myForm: FormGroup;

constructor(private _fb: FormBuilder) { }
 email = new FormControl('', [Validators.compose([EmailValidators.simple]),Validators.required]);
   ngOnInit() {
        this.myForm = this._fb.group({
           mail: this.email,
            
          
        });
    }
  save(model: Personnel) {
        // call API to save
        // ...
        console.log(model);
    }


}
