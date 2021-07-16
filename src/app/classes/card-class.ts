export class Cards{
  title: string;
  description: string;
  creationTime: Date;

  constructor(title, desc, creationTime){
    this.title = title;
    this.description = desc;
    this.creationTime = creationTime;
  }


  getCardDetails(title: string){
    return { title: this.title, desc: this.description, creationTime: this.creationTime };
  }


}
