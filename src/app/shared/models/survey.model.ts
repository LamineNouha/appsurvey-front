export class Question {
  id?: string;
  survey: string;
  content: string;
  responses: Response[];
  

  
  
  
constructor(a:string, s:string){
  this.content=a;
  console.log("ssssss"+s);
  this.survey=s;
};
  
}

export class Survey {
  id?: string;
  title: string;
  questions: Question[];
  user: string;
 
constructor(a:string, t: string, user: string){
this.id=a;
this.title=t;
this.user = user;


  };

  

}
  export class Response {
  id?: string;
  question: string;
  choice: string;
  checked: boolean;
 
  
  constructor(t: string, q: string, checked:boolean){
this.choice=t;
this.question=q;
this.checked=checked;

  };

  /*constructor(obj?: any) {
    this.choix = obj && obj.contenu || null;
  
    
  }*/
}

