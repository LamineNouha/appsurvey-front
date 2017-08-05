import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Survey} from '../../shared/models/survey.model';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: []
})
export class AddSurveyComponent implements OnInit {
first: string ="Questionnaire";
second: string ="Ajouter un questionnaire";
second_url: string ="/surveys/add";
second_bool:any =true;


 public myForm: FormGroup;

constructor(private _fb: FormBuilder) { }

   ngOnInit() {
        this.myForm = this._fb.group({
            title: ['', [Validators.required, Validators.minLength(5)]],
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
    }

initQuestion() {
        return this._fb.group({
            content: ['', Validators.required],
            responses:this._fb.array([
                this.initResponse(),
            ])
            
        });
    }

    initResponse() {
        return this._fb.group({
            choice: ['', Validators.required],
          
            
        });
    }
 addQuestion() {
        const control = <FormArray>this.myForm.controls['questions'];
      
        control.push(this.initQuestion());
    }

     addRseponse(i: number) {
      const control = <FormArray>this.myForm.controls['questions'];
       const control1= <FormArray>control.at(i).get('responses');
       control1.push(this.initResponse());
    }

 removeQuestion(i: number) {
        const control = <FormArray>this.myForm.controls['questions'];
        control.removeAt(i);
    }


 removeResponse(i: number,j: number) {
        const control = <FormArray>this.myForm.controls['questions'];
        const control1= <FormArray>control.at(i).get('responses');
        control1.removeAt(j);
    }
save(model: Survey) {
        // call API to save
        // ...
        console.log(model);
    }
}
