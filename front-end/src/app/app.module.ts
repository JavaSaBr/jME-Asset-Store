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
  MatGridListModule
} from '@angular/material';


import { AppComponent } from './app.component';
import {MathComponent} from "./components/math/math.component";
import {UserComponent} from "./components/user/user.component";
import {FileComponent} from "./components/file/file.component";

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    UserComponent,
    FileComponent
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
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
