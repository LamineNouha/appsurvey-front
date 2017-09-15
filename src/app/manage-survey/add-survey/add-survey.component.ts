import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators ,AbstractControl, FormControl} from '@angular/forms';
import {Survey} from '../../shared/models/survey.model';
import {Question} from '../../shared/models/survey.model';
import {Response} from '../../shared/models/survey.model';
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../shared/services/storage.service";



import {SurveyService} from "../../shared/services/survey.service";
import {QuestionService} from "../../shared/services/question.service";
import {ResponseService} from "../../shared/services/response.service";
import {Subscription} from "rxjs/Subscription";
import {Http} from '@angular/http';
import {BusyModule} from 'angular2-busy';
import {User} from '../../shared/models/user.model';
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
 surveyId: string;
 busy: Subscription;
 public myForm: FormGroup;
 isEditAction: boolean;
 user: User;
 

constructor(private _fb: FormBuilder,private surveyService: SurveyService,private questionService: QuestionService,private responseService: ResponseService, private router: Router, private route: ActivatedRoute, private http: Http,private storageService: StorageService) { 
      this.busy = this.http.get('...').subscribe();
      this.isEditAction = this.router.url.indexOf('edit') !== -1;
      console.log("isedit: "+this.isEditAction);
      const baseContext = this;


      this.user= <User>storageService.read('user');
    
      
   
     
     
}

   ngOnInit() {
   

 this.myForm= this._fb.group([]);
 console.log("fo4m: "+JSON.stringify(this.myForm.value));
    
 if(this.isEditAction){


        var url_components :string []=this.router.url.split('/');
        this.surveyId=url_components[2];
        console.log("id of survey to edit: "+url_components[2]);
    
     
         this.survey= this.storageService.read<Survey>('currentSurvey');
         console.log("surveyID to edit: "+this.surveyId);
         
         //initialise the survey questions
         for (var i = 0; i < this.storageService.read<Survey>('currentSurvey').questions.length; i++) {
            this.survey.questions[i]=this.storageService.read<Survey>('currentSurvey').questions[i];
              
         }
        
     
         //initialise the formgroup
          this.myForm = this._fb.group({
             _id:[this.survey.id,[]],
             title: [this.survey.title, [Validators.required, Validators.minLength(5)]],
             questions: this.initQuestion(this.survey.questions.length),
            
             
         });
      console.log("***********=formgroup-final=====***** "+JSON.stringify(this.myForm.value));
     

      
    }
    else{
        this.myForm = this._fb.group({
            _id:['',[]],
            title: ['', [Validators.required, Validators.minLength(5)]],
            questions: this.initQuestion(0),
          
            
        });
           }

}

initQuestion(nbq:number) {
    var a:FormArray= this._fb.array([]);
   if(nbq==0)
    {
        a.insert(0,this._fb.group({
            _id:[],
            content: ['', Validators.required],
            survey:['',[]],
            responses: this.initResponse(0,0),
            
            
        }));
    
        //console.log("first aaaaa "+JSON.stringify(a.value));
       
    }  
   else{
    for (var i = 0; i < nbq; i++) {
        
       
        a.insert(i, this._fb.group({_id: [this.survey.questions[i].id,[]],
            content: [this.survey.questions[i].content, [Validators.required]],
            survey:[this.survey.questions[i].survey,[]],
            responses: this.initResponse(i,this.survey.questions[i].responses.length),
        })
    );
   
    }

    }
    return a;
}

    initResponse(q:number,nbq:number) {
        var a:FormArray= this._fb.array([]);
        if(q==0&&nbq==0)
            { a.insert(0,this._fb.group({
                _id:['',[]],
                choice: ['', [Validators.required]],
                question:['',[]],
              
                
            }));


              
              
            }  
           else{
            for (var i = 0; i < nbq; i++) {
                a.insert(i,this._fb.group({_id: [this.survey.questions[q].responses[i].id,[]],
                    choice: [this.survey.questions[q].responses[i].choice,[Validators.required]],
                    question:[this.survey.questions[q].id],
                    
                })
            )
                
            }
    }
    return a;
    }
 addQuestion() {
    (<FormArray>this.myForm.controls.questions).push(this._fb.group({
        _id:[],
        content: ['', Validators.required],
        survey:['',[]],
        responses: this.initResponse(0,0),
        
        
    }));
      
        
    }

     addResponse(i: number,j: number) {
       //const control=<FormArray>this.myForm.controls.questions;
       //const control1= <FormArray>control.at(i).get('responses');
       
      // control1.insert(j,(this.initResponse(0,0)));
       
       (<FormArray>(<FormArray>this.myForm.controls.questions).at(i).get('responses')).insert(j,this._fb.group({
        _id:['',[]],
        choice: ['', [Validators.required]],
        question:['',[]],
      
        
    }));
       
    }

 removeQuestion(i: number) {
        const control = <FormArray>this.myForm.controls['questions'];
        control.removeAt(i);
    }


 removeResponse(i: number,j: number) {
        const control = <FormArray>this.myForm.get('questions');
        const control1= <FormArray>control.at(i).get('responses');
        control1.removeAt(j);
    }
save(myForm: FormGroup) {
    const baseContext = this;
    if(!this.isEditAction){
  //add
  console.log( "*********submitedFormGroup******** "+ JSON.stringify(myForm.value));
    var id_survey;
    
   this.survey= new Survey('',myForm.controls.title.value, this.user._id);
  
  
   console.log( "*********submitedSurvey******** "+ JSON.stringify( this.survey));
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
            }).then (function () {
               
                baseContext.router.navigate(["/survey/list"]);
                          
                     
                      }, function(dismiss){
                        
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
   
    
   
for (var j = 0; j < control1.length; j++) {

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
else{


    this.busy = this.surveyService.deleteOne(this.surveyId).subscribe(data => {
       
      }, error => {

      });


  //edit
  console.log( "*********submitedFormGroup******** "+ JSON.stringify(myForm.value));
  var id_survey;
  
 this.survey= new Survey('',myForm.controls.title.value,this.user._id);

 console.log( "*********submitedSurvey******** "+ JSON.stringify( this.survey));
 //add survey 
 this.busy = this.surveyService.add(this.survey)
      .subscribe(
        (data) => {
          console.log("swal");
          swal({
            title: "Succés!",
            text: 'Survey edité avec succés',
            confirmButtonColor: "#66BB6A",
            type: "success"
          }).then (function () {
             
              baseContext.router.navigate(["/survey/list"]);
                        
                   
                    }, function(dismiss){
                      
                  });
          console.log(data);
          //getting the id of the added survey
           id_survey= data._id;
           //deleting current survey from storage
           //this.storageService.remove('currentSurvey');
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
 
  
 
for (var j = 0; j < control1.length; j++) {

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

}
