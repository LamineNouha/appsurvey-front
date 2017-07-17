export class Question {
  contenu: string;
  reponses: Reponse[];
  

  constructor(obj?: any) {
    this.contenu = obj && obj.contenu || null;
    this.reponses = obj && obj.reponses || null;
    
  }
}

export class Questionnaire {
  id: number;
  titre: string;
  questions: Question[];
 

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.titre = obj && obj.titre || null;
    this.questions = obj && obj.questions || null;
  }

}
  export class Reponse {
  choix: string;
 
  

  constructor(obj?: any) {
    this.choix = obj && obj.contenu || null;
  
    
  }
}

