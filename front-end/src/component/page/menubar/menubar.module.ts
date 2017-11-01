import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSidenavModule} from '@angular/material';
import {MenubarComponent} from "./menubar.component";

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ],
  declarations: [MenubarComponent]
})
export class MenubarModule { }
