import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Cards } from '../classes/card-class';
import { List } from '../classes/list-class';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list: Array<List> = [];
  constructor(private date: DatePipe) { }

  createListForm(listName){
    const valid = this.isValidList(listName);
    if (valid){
      this.list.push(new List(listName));
    }else{
      alert('List with Same Name exists');
    }
  }

createCardForm(listName, title, desc){
  this.list.forEach(ele => {
    if (ele.listName === listName){
      ele.cards.push(new Cards(title, desc, this.date.transform(new Date(), 'MMM d, y, h:mm:ss a')));
      ele.cards.sort((a, b) => {
        if(a.creationTime < b.creationTime){
          return 1;
          }else if (a.creationTime > b.creationTime){
            return -1;
          }
          else{
            return 0;
          }
      });
    }
  });

}

isValidList(listName){
  let valid = true;
  if (listName){
  this.list.forEach(ele => {
      if (ele.listName === listName){
        valid = false;
      }
    });
  }else{
    valid = false;
  }
  return valid;
}
sortingCards(){
  this.list.forEach(ele => {
      ele.cards.sort((a, b) => {
        if(a.creationTime < b.creationTime){
          return 1;
          }else if (a.creationTime > b.creationTime){
            return -1;
          }
          else{
            return 0;
          }
      });
  });
}

}
