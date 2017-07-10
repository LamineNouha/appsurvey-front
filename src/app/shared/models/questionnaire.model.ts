export class Questionnaire {
  constructor(
    public _id: number = Math.floor(Math.random()*100),
    public titre:string = "",
    public nbr_questions :number =0
  ){}
  
}