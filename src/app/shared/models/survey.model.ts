export class Question {
  id?: number;
  survey: string;
  content: string;
  responses: Response[];

  
  

  
constructor(a:string, s:string){
  this.content=a;
  console.log("ssssss"+s);
  this.survey=s;
};
  /*constructor(obj?: any) {
    this.contenu = obj && obj.contenu || null;
    this.reponses = obj && obj.reponses || null;
    
  }*/
}

export class Survey {
  id?: number;
  title: string;
  questions: Question[];
 
constructor(a:number, t: string, q: Question[]){
this.id=a;
this.title=t;
this.questions=q;

  };

  /*constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.titre = obj && obj.titre || null;
    this.questions = obj && obj.questions || null;
  }*/

}
  export class Response {
  id?: number;
  question: string;
  choice: string;
 
  
  constructor(t: string, q: string){
this.choice=t;
this.question=q;

  };

  /*constructor(obj?: any) {
    this.choix = obj && obj.contenu || null;
  
    
  }*/
}

