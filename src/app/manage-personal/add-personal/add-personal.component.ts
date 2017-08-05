import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Personal} from '../../shared/models/personal.model';
import { EmailValidators } from 'ngx-validators';


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
 public myForm: FormGroup;

constructor(private _fb: FormBuilder) { }
 email = new FormControl('', [Validators.compose([EmailValidators.simple]),Validators.required]);
   ngOnInit() {
        this.myForm = this._fb.group({
           mail: this.email,
            
          
        });
    }
  save(model: Personal) {
        // call API to save
        // ...
        console.log(model);
    }


}
