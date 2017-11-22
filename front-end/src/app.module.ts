import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {
  MatButtonModule, MatInputModule, MatToolbarModule, MatSelectModule, MatPaginatorModule, MatMenuModule,
  MatGridListModule, MatFormFieldModule, MatListModule, MatSidenavModule, MatTabsModule, MatTableModule, MatIconModule,
  MatCardModule, MatTooltipModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {LoginComponent} from "./component/page/login/login.component";
import {RegisterComponent} from "./component/page/register/register.component";
import {DashboardComponent} from "./component/page/dashboard/dashboard.component";
import {SecurityService} from "./service/security.service";
import {AppSettingsComponent} from "./component/page/app-settings/app-settings.component";
import {FormControlDirective} from '@angular/forms';
import {ValidatorModule} from "./validate/validator.module";
import {AssetCategoryComponent} from './component/page/app-settings/page/asset-category/asset-category.component';
import {RouterModule} from "@angular/router";
import {AppSettingsGuard} from "./component/page/app-settings/app-settings.guard";
import {FileTypesService} from "./service/file-types.service";
import {AddAssetComponent} from "./component/page/create-asset/create-asset.component";
import {UserAssetsComponent} from "./component/page/user-assets/user-assets.component";
import {FileTypesComponent} from "./component/page/app-settings/page/file-types/file-types.component";
import {HttpClientModule} from "@angular/common/http";
import {AddFileTypeComponent} from './component/page/app-settings/page/file-types/add-file-type/add-file-type.component';
import {FileTypeDataSource} from "./service/file-type-data-source";
import {AssetCategoryService} from "./service/asset-category.service";
import {ChooseAssetCategoryComponent} from "./component/page/choose-asset-category/choose-asset-category.component";
import {TreeViewComponent} from './component/page/dashboard/tree-view/tree-view.component';
import {BrowsingComponent} from './component/page/dashboard/browsing/browsing.component';
import {AssetService} from "./service/asset/asset.service";
import {AssetFilesComponent} from './component/page/asset-files/asset-files.component';
import {UserAssetGuard} from "./component/page/user-assets/user-asset.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AppSettingsComponent,
    FormControlDirective,
    FileTypesComponent,
    FormControlDirective,
    AssetCategoryComponent,
    AddFileTypeComponent,
    AddAssetComponent,
    UserAssetsComponent,
    ChooseAssetCategoryComponent,
    TreeViewComponent,
    BrowsingComponent,
    UserAssetsComponent,
    ChooseAssetCategoryComponent,
    AddFileTypeComponent,
    AssetFilesComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    ValidatorModule,
    RouterModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [SecurityService, FileTypeDataSource, AppSettingsGuard, FileTypesService, AssetCategoryService,
    AssetService, UserAssetGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
