import { Cards } from './card-class';

export class List{

  listName: string;
  cards: Array<Cards>;

  constructor(listName){
    this.listName = listName;
    this.cards = [];
  }

  getListDetails(){
    return {listName: this.listName, cards: this.cards};
  }

}


export class Lists{
  list: Array<object>;
  constructor(list){
    this.list.push(new List(list));
  }
}
