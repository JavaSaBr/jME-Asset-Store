import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MatButtonModule, MatInputModule, MatToolbarModule, MatSelectModule} from '@angular/material';

import {AppComponent} from './app.component';
import {LoginComponent} from "./component/page/login/login.component";
import {RegisterComponent} from "./component/page/register/register.component";
import {DashboardComponent} from "./component/page/dashboard/dashboard.component";
import {SecurityService} from "./service/security.service";
import { FormControlDirective } from '@angular/forms';
import {ValidatorModule} from "./validate/validator.module";
import { MenubarComponent } from './component/page/menubar/menubar.component';
import {MenubarModule} from "./component/page/menubar/menubar.module";
import { UserSettingComponent } from './component/page/settings/user-setting/user-setting.component';
import { UploadSettingComponent } from './component/page/settings/upload-setting/upload-setting.component';
import { FileSettingComponent } from './component/page/settings/file-setting/file-setting.component';
import { AssetSettingComponent } from './component/page/settings/asset-setting/asset-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FormControlDirective,
    UserSettingComponent,
    UploadSettingComponent,
    FileSettingComponent,
    AssetSettingComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    ValidatorModule,
    MenubarModule
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
