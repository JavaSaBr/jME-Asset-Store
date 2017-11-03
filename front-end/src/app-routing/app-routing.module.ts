import {NgModule} from '@angular/core';
import {ExtraOptions, Router, RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RouteList} from '../util/route-list';
import {LoginComponent} from "../component/page/login/login.component";
import {DashboardComponent} from "../component/page/dashboard/dashboard.component";
import {RegisterComponent} from "../component/page/register/register.component";
import {AppSettingsComponent} from "../component/page/app-settings/app-settings.component";
import {FileTypesComponent} from "../component/page/app-settings/page/file-types/file-types.component";
import {AssetCategoryComponent} from "../component/page/app-settings/page/asset-category/asset-category.component";
import {AppSettingsGuard} from "../component/page/app-settings/app-settings.guard";

/**
 * The list of routes of this application.
 */
const routes: Routes = [
  {path: '', redirectTo: '/' + RouteList.PAGE_DASHBOARD, pathMatch: 'full'},
  {path: RouteList.PAGE_DASHBOARD, component: DashboardComponent},
  {path: RouteList.PAGE_LOGIN, component: LoginComponent},
  {path: RouteList.PAGE_REGISTER, component: RegisterComponent},
  {
    path: RouteList.PAGE_APP_SETTINGS, component: AppSettingsComponent, canActivate: [AppSettingsGuard], children: [
    {path: RouteList.PAGE_FILE_TYPES, component: FileTypesComponent, outlet: "settings"},
    {path: RouteList.PAGE_ASSET_CATEGORY, component: AssetCategoryComponent, outlet: "settings"}
  ]
  },
];

/**
 * The configuration of the router module.
 */
const routerOptions: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
