import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RouteList} from '../util/route-list';
import {LoginComponent} from "../component/page/login/login.component";
import {DashboardComponent} from "../component/page/dashboard/dashboard.component";
import {RegisterComponent} from "../component/page/register/register.component";
import {MenubarComponent} from "../component/page/menubar/menubar.component";

/**
 * The list of routes of this application.
 */
const routes: Routes = [
  {path: '', redirectTo: '/' + RouteList.PAGE_DASHBOARD, pathMatch: 'full'},
  {path: RouteList.PAGE_DASHBOARD, component: DashboardComponent},
  {path: RouteList.PAGE_LOGIN, component: LoginComponent},
  {path: RouteList.PAGE_REGISTER, component: RegisterComponent},
  {path: "menu", component: MenubarComponent}
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
