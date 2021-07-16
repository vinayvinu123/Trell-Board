import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { DialogListComponent } from './dialog-list/dialog-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { DatePipe } from '@angular/common';
import { DialogCardComponent } from './dialog-card/dialog-card.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TrellListComponent } from './trell-list/trell-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    DialogListComponent,
    MiniCardComponent,
    DialogCardComponent,
    TrellListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
