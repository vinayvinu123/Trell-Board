import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {
cardName: string;
desc: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogCardComponent>) { }

  ngOnInit(): void {
  }

  onClick(){
    this.cardName = (document.getElementById('cardName') as HTMLInputElement).value;
    this.desc = (document.getElementById('description') as HTMLInputElement).value;
    console.log(this.cardName, this.desc);
    this.dialogRef.close({
      data: {title: this.cardName, desc: this.desc}
    });
  }
}
