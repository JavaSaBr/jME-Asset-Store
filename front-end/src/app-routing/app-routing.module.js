"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var route_list_1 = require("../util/route-list");
var login_component_1 = require("../component/page/login/login.component");
var dashboard_component_1 = require("../component/page/dashboard/dashboard.component");
var register_component_1 = require("../component/page/register/register.component");
/**
 * The list of routes of this application.
 */
var routes = [
    { path: '', redirectTo: '/' + route_list_1.RouteList.PAGE_DASHBOARD, pathMatch: 'full' },
    { path: route_list_1.RouteList.PAGE_DASHBOARD, component: dashboard_component_1.DashboardComponent },
    { path: route_list_1.RouteList.PAGE_LOGIN, component: login_component_1.LoginComponent },
    { path: route_list_1.RouteList.PAGE_REGISTER, component: register_component_1.RegisterComponent },
];
/**
 * The configuration of the router module.
 */
var routerOptions = {
    useHash: true
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forRoot(routes, routerOptions)
        ],
        exports: [router_1.RouterModule],
        declarations: []
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
