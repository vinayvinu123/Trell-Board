import { List } from './../classes/list-class';
import { ListService } from './../services/list-service.service';
import { Cards } from './../classes/card-class';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {
@Input() cardDetails: Cards;
@Input() listDetails: List;
@Input() index: number;
title: string;
  constructor(public dialogRef: MatDialog, private listSvc: ListService) { }

  ngOnInit(): void {
    this.title = 'welcome';
    console.log('title',this.cardDetails);
  }

  deleteCard(list, index){
    this.listSvc.list.forEach((ele) => {
      if (ele.listName === list){
        ele.cards.splice(index, 1);
      }
});
}

}
