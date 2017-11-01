import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatSidenavModule} from '@angular/material';
import {MenubarComponent} from "./menubar.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [MenubarComponent]
})
export class MenubarModule {
}
