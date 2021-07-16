import { DialogCardComponent } from './../dialog-card/dialog-card.component';
import { ListService } from './../services/list-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardHeader: string;
  constructor(private listSvc: ListService, public dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  addNewCard(listName){
    const dialogRef = this.dialogRef.open(DialogCardComponent, {
      width: '450px',
      data : { header: this.cardHeader}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.listSvc.createCardForm(listName, res.data.title, res.data.desc);
    });
  }

  deleteList(listName){
    this.listSvc.list.forEach((ele,index) => {
      if (ele.listName === listName){
          this.listSvc.list.splice(index, 1);
          alert(listName + ' deleted from List');
      }
    });
  }

}
