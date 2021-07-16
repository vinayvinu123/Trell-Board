import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.css']
})
export class DialogListComponent implements OnInit {
  listName: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogListComponent>) { }

  ngOnInit(): void {
  }

  onClick(){
    this.listName = (document.getElementById('listName') as HTMLInputElement).value;
    console.log(this.listName);
    this.dialogRef.close({
      data: this.listName
    });
  }

}
