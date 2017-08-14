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
  /*constructor(obj?: any) {
    this.contenu = obj && obj.contenu || null;
    this.reponses = obj && obj.reponses || null;
    
  }*/
}

export class Survey {
  id?: string;
  title: string;
  questions: Question[];
 
constructor(a:string, t: string){
this.id=a;
this.title=t;


  };

  /*constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.titre = obj && obj.titre || null;
    this.questions = obj && obj.questions || null;
  }*/

}
  export class Response {
  id?: string;
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

