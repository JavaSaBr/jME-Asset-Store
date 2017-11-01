import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RouteList} from '../util/route-list';
import {LoginComponent} from "../component/page/login/login.component";
import {DashboardComponent} from "../component/page/dashboard/dashboard.component";
import {RegisterComponent} from "../component/page/register/register.component";
import {MenubarComponent} from "../component/page/menubar/menubar.component";
import {UserSettingComponent} from "../component/page/settings/user-setting/user-setting.component";
import {UploadSettingComponent} from "../component/page/settings/upload-setting/upload-setting.component";
import {FileSettingComponent} from "../component/page/settings/file-setting/file-setting.component";
import {AssetSettingComponent} from "../component/page/settings/asset-setting/asset-setting.component";

/**
 * The list of routes of this application.
 */
const routes: Routes = [
  {path: '', redirectTo: '/' + RouteList.PAGE_DASHBOARD, pathMatch: 'full'},
  {path: RouteList.PAGE_DASHBOARD, component: DashboardComponent},
  {path: RouteList.PAGE_LOGIN, component: LoginComponent},
  {path: RouteList.PAGE_REGISTER, component: RegisterComponent},
  {
    path: RouteList.PAGE_MENU, component: MenubarComponent, children: [
    {path: RouteList.PAGE_SETTING_USER, component: UserSettingComponent, outlet: RouteList.OUTLET_SETTINGS},
    {path: RouteList.PAGE_SETTING_UPLOAD, component: UploadSettingComponent, outlet: RouteList.OUTLET_SETTINGS},
    {path: RouteList.PAGE_SETTING_FILE, component: FileSettingComponent, outlet: RouteList.OUTLET_SETTINGS},
    {path: RouteList.PAGE_SETTING_ASSET, component: AssetSettingComponent, outlet: RouteList.OUTLET_SETTINGS},
  ]
  }
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
