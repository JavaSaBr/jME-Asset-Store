import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatSelectModule
} from '@angular/material';

import {MathComponent} from "./components/math/math.component";
import {FileComponent} from "./components/file/file.component";
import {UserComponent} from "./components/user/user.component";
import {ExampleComponent} from "./components/example/example.component";


@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    UserComponent,
    MathComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
