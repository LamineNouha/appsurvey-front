import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Survey} from '../../shared/models/survey.model';
import {Question} from '../../shared/models/survey.model';
import {Response} from '../../shared/models/survey.model';




import {SurveyService} from "../../shared/services/survey.service";
import {QuestionService} from "../../shared/services/question.service";
import {ResponseService} from "../../shared/services/response.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Http} from '@angular/http';
import {BusyModule} from 'angular2-busy';
declare let swal: any;

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
 survey: Survey;
 busy: Subscription;
 public myForm: FormGroup;

constructor(private _fb: FormBuilder,private surveyService: SurveyService,private questionService: QuestionService,private responseService: ResponseService, private router: Router, private http: Http) { 
      this.busy = this.http.get('...').subscribe();
}

   ngOnInit() {
        this.myForm = this._fb.group({
            title: ['', [Validators.required, Validators.minLength(5)]],
            questions: this._fb.array([
                this.initQuestion(),
            ]),
            
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

     addResponse(i: number) {
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
save(myForm: FormGroup) {
  
    var id_survey;
    var s_questions=Array<object>();
   this.survey= myForm.value;
    
   //add survey 
   this.busy = this.surveyService.add(this.survey)
        .subscribe(
          (data) => {
            console.log("swal");
            swal({
              title: "Succés!",
              text: 'Survey ajouté avec succés',
              confirmButtonColor: "#66BB6A",
              type: "success"
            });
            console.log(data);
            //getting the id of the added survey
             id_survey= data._id;
             console.log("id of added survey: "+id_survey);





            //*this section is for adding survey questions

    this.survey.questions=myForm.controls['questions'].value;
    const control = <FormArray>myForm.controls['questions'];
  
   for (var i = 0; i < this.survey.questions.length; i++) {
      const control1= <FormArray>control.at(i).get('responses'); 
      var question:Question;
      var id_question;

     question=new Question(control.at(i).value.content,id_survey);
  
      console.log("question to add: "+    JSON.stringify(question));
      //adding each question to the base
     this.questionService.add(question)
     .subscribe(
          (data) => {
           console.log(data);
            //getting the id of the added question
            id_question= data._id;
            console.log("id of added question: "+id_question);



            ////**this section is for adding question reponses

        //treating the responses of this question
   
    
   
for (var j = 0; j < this.survey.questions.length; j++) {

var response:Response;
      var id_response;
      response=new Response(control1.at(j).value.choice,id_question);
     
      //adding each response to the base
     this.responseService.add(response)
     .subscribe(
          (data) => {
           console.log(data);
           console.log("id of added response: "+data._id);

          },
            (error) => {

          }

        );


}
    ////**
          },
            (error) => {
 console.log(error);
          }
        );

}
    //*
          },
          (error) => {

          }
        );

}
}
