export class Personal {
  id: number;
  email: string;
  password: string;
  image: string;
  
constructor(mail:string, 
  code:string, image:string){
  this.email=mail;
  this.password=code;
  this.image=image;
};
  /*constructor(obj?: any) {
    this.mail = obj && obj.mail || null;
    this.code = obj && obj.code || null;
    this.image = obj && obj.image || null;
    
  }*/
}