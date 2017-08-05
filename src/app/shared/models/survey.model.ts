export class Question {
  id: number;
  id_survey: number;
  content: string;
  responses: Response[];
  
constructor(a:string, r: Response[]){
  this.content=a;
  this.responses=r;
};
  /*constructor(obj?: any) {
    this.contenu = obj && obj.contenu || null;
    this.reponses = obj && obj.reponses || null;
    
  }*/
}

export class Survey {
  id: number;
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
  id: number;
  id_question: number;
  choice: string;
 
  
  constructor(t: string){
this.choice=t;

  };

  /*constructor(obj?: any) {
    this.choix = obj && obj.contenu || null;
  
    
  }*/
}

