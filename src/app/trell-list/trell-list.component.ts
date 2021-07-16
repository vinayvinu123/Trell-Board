import { ListService } from './../services/list-service.service';
import { List } from './../classes/list-class';
import { DialogListComponent } from './../dialog-list/dialog-list.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trell-list',
  templateUrl: './trell-list.component.html',
  styleUrls: ['./trell-list.component.css']
})
export class TrellListComponent implements OnInit {
  listName: string;
  list: Array<List> = [];
  constructor(public dialogRef: MatDialog, private listService: ListService) { }

  ngOnInit(): void {
    this.list = this.listService.list;
  }
  addNewList(): void{
    const dialogRef = this.dialogRef.open(DialogListComponent, {
      width: '250px',
      data : {listName : this.listName}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.listService.createListForm(res.data);
      // this.listService.createCardForm(res.data);
      console.log(this.listService.list);
    });


  }
  deleteCard(list, index){
    this.listService.list.forEach((ele) => {
      if (ele.listName === list){
        ele.cards.splice(index, 1);
      }
});
}
drop(event: CdkDragDrop<string[]>,index) {
  console.log('Event',event,index);
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      index);

  this.listService.sortingCards();
}


}
