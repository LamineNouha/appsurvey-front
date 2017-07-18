import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Questionnaire} from '../../shared/models/questionnaire.model';

@Component({
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrls: ['./add-questionnaire.component.css']
})
export class AddQuestionnaireComponent implements OnInit {
first: string ="Questionnaire";
second: string ="Ajouter un questionnaire";
second_url: string ="/questionnaires/add";
second_bool:any =true;


 public myForm: FormGroup;

constructor(private _fb: FormBuilder) { }

   ngOnInit() {
        this.myForm = this._fb.group({
            titre: ['', [Validators.required, Validators.minLength(5)]],
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
    }

initQuestion() {
        return this._fb.group({
            contenu: ['', Validators.required],
            reponses:this._fb.array([
                this.initReponse(),
            ])
            
        });
    }

    initReponse() {
        return this._fb.group({
            choix: ['', Validators.required],
          
            
        });
    }
 addQuestion() {
        const control = <FormArray>this.myForm.controls['questions'];
      
        control.push(this.initQuestion());
    }

     addReponse(i: number) {
      const control = <FormArray>this.myForm.controls['questions'];
       const control1= <FormArray>control.at(i).get('reponses');
       control1.push(this.initReponse());
    }

 removeQuestion(i: number) {
        const control = <FormArray>this.myForm.controls['questions'];
        control.removeAt(i);
    }


 removeReponse(i: number,j: number) {
        const control = <FormArray>this.myForm.controls['questions'];
        const control1= <FormArray>control.at(i).get('reponses');
        control1.removeAt(j);
    }
save(model: Questionnaire) {
        // call API to save
        // ...
        console.log(model);
    }
}
