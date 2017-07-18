export class Personnel {
 
  mail: string;
  code: string;
  image: string;
  
constructor(mail:string, code:string, image:string){
  this.mail=mail;
  this.code=code;
  this.image=image;
};
  /*constructor(obj?: any) {
    this.mail = obj && obj.mail || null;
    this.code = obj && obj.code || null;
    this.image = obj && obj.image || null;
    
  }*/
}