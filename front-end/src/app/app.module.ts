import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule
} from '@angular/material';


import { AppComponent } from './app.component';
import {MathComponent} from "./components/math/math.component";

import {FileComponent} from "./components/file/file.component";
import {UserComponent} from "./components/user/user.component";


@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    FileComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
