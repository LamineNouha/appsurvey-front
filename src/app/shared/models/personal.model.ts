export class Personal {
  id: string;
  email: string;
  password: string;
  image: string;
  user: string;
  
constructor(id: string, mail:string, user:string,)
  {
  this.id= id;
  this.email=mail;
  this.user=user;
  
};
  /*constructor(obj?: any) {
    this.mail = obj && obj.mail || null;
    this.code = obj && obj.code || null;
    this.image = obj && obj.image || null;
    
  }*/
}