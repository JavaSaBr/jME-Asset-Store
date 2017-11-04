webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_route_list__ = __webpack_require__("../../../../../src/util/route-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_page_login_login_component__ = __webpack_require__("../../../../../src/component/page/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_page_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/component/page/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_page_register_register_component__ = __webpack_require__("../../../../../src/component/page/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_page_app_settings_app_settings_component__ = __webpack_require__("../../../../../src/component/page/app-settings/app-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_page_app_settings_page_file_types_file_types_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/file-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_page_app_settings_page_asset_category_asset_category_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_page_app_settings_app_settings_guard__ = __webpack_require__("../../../../../src/component/page/app-settings/app-settings.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
 * The list of routes of this application.
 */
var routes = [
    { path: '', redirectTo: '/' + __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_DASHBOARD, pathMatch: 'full' },
    { path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_DASHBOARD, component: __WEBPACK_IMPORTED_MODULE_5__component_page_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_LOGIN, component: __WEBPACK_IMPORTED_MODULE_4__component_page_login_login_component__["a" /* LoginComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_REGISTER, component: __WEBPACK_IMPORTED_MODULE_6__component_page_register_register_component__["a" /* RegisterComponent */] },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_APP_SETTINGS, component: __WEBPACK_IMPORTED_MODULE_7__component_page_app_settings_app_settings_component__["a" /* AppSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__component_page_app_settings_app_settings_guard__["a" /* AppSettingsGuard */]], children: [
            { path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_FILE_TYPES, component: __WEBPACK_IMPORTED_MODULE_8__component_page_app_settings_page_file_types_file_types_component__["a" /* FileTypesComponent */] },
            { path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_ASSET_CATEGORY, component: __WEBPACK_IMPORTED_MODULE_9__component_page_app_settings_page_asset_category_asset_category_component__["a" /* AssetCategoryComponent */] }
        ]
    },
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, routerOptions)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar class=\"app-bar mat-elevation-z6\" color=\"primary\">\n  <button mat-button routerLink=\"/dashboard\" routerLinkActive=\"m-toolbar-button-active\">Home\n  </button>\n  <span class=\"app-toolbar-filler\"></span>\n  <button mat-button *ngIf=\"!authed\" routerLink=\"/login\"\n          routerLinkActive=\"m-toolbar-button-active\">Login\n  </button>\n  <button mat-button *ngIf=\"!authed\" routerLink=\"/register\"\n          routerLinkActive=\"m-toolbar-button-active\">Register\n  </button>\n  <button mat-button *ngIf=\"hasRole('ADMIN')\" routerLink=\"/app-settings\" routerLinkActive=\"m-toolbar-button-active\">\n    App settings\n  </button>\n  <button mat-button *ngIf=\"authed\" routerLink=\"/\" (click)=\"logout()\">Logout</button>\n</mat-toolbar>\n<div class=\"root-content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_security_service__ = __webpack_require__("../../../../../src/service/security.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Alex Brui
 */
var AppComponent = (function () {
    function AppComponent(security) {
        var _this = this;
        this.security = security;
        this._authed = false;
        this.security.authProperty
            .subscribe(function (result) { return _this._authed = result; });
    }
    AppComponent.prototype.logout = function () {
        this.security.logout();
    };
    Object.defineProperty(AppComponent.prototype, "authed", {
        /**
         * The flag that the user is authed.
         *
         * @returns {boolean}
         */
        get: function () {
            return this._authed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check the role in the current user.
     *
     * @param {string} toCheck the role to check.
     * @returns {boolean} true if the current user has the role.
     */
    AppComponent.prototype.hasRole = function (toCheck) {
        return this.security.hasRole(toCheck);
    };
    return AppComponent;
}());
AppComponent.MIN_USERNAME_LENGTH = 3;
AppComponent.MAX_USERNAME_LENGTH = 25;
AppComponent.MIN_FIRST_NAME_LENGTH = 1;
AppComponent.MAX_FIRST_NAME_LENGTH = 25;
AppComponent.MIN_PASSWORD_LENGTH = 6;
AppComponent.MAX_PASSWORD_LENGTH = 25;
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_security_service__["a" /* SecurityService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_page_login_login_component__ = __webpack_require__("../../../../../src/component/page/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_page_register_register_component__ = __webpack_require__("../../../../../src/component/page/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_page_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/component/page/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_security_service__ = __webpack_require__("../../../../../src/service/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_page_app_settings_app_settings_component__ = __webpack_require__("../../../../../src/component/page/app-settings/app-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_page_app_settings_page_file_types_file_types_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/file-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__validate_validator_module__ = __webpack_require__("../../../../../src/validate/validator.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_page_app_settings_page_asset_category_asset_category_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_page_app_settings_app_settings_guard__ = __webpack_require__("../../../../../src/component/page/app-settings/app-settings.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_page_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_page_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_page_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_page_app_settings_app_settings_component__["a" /* AppSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_page_app_settings_page_file_types_file_types_component__["a" /* FileTypesComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControlDirective */],
            __WEBPACK_IMPORTED_MODULE_15__component_page_app_settings_page_asset_category_asset_category_component__["a" /* AssetCategoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_14__validate_validator_module__["a" /* ValidatorModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatTabsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__service_security_service__["a" /* SecurityService */], __WEBPACK_IMPORTED_MODULE_17__component_page_app_settings_app_settings_guard__["a" /* AppSettingsGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/component/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/**
 * The base component.
 *
 * @author Alex Brui
 */
var BaseComponent = (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ "../../../../../src/component/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_component__ = __webpack_require__("../../../../../src/component/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The page component.
 *
 * @author Alex Brui
 */
var PageComponent = (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(PageComponent.prototype, "minUsernameLength", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MIN_USERNAME_LENGTH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "maxUsernameLength", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MAX_USERNAME_LENGTH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "minFirstNameLength", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MIN_FIRST_NAME_LENGTH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "maxFirstNameLength", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MAX_FIRST_NAME_LENGTH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "minPasswordLength", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MIN_PASSWORD_LENGTH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "maxPasswordLength", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MAX_PASSWORD_LENGTH;
        },
        enumerable: true,
        configurable: true
    });
    return PageComponent;
}(__WEBPACK_IMPORTED_MODULE_0__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/app-settings/app-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.app-settings {\n  width: 30vh;\n  height: 100vh;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #636363;\n  position: absolute;\n  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.30);\n}\n\n.mat-button {\n  width: 100%;\n  border-bottom: 2px solid #e8e8e8;\n  text-align: left;\n}\n\n.mat-button:hover {\n  font-weight: bold;\n}\n\n.setting-content {\n  font-size: 1em;\n  color: #636363;\n  font-family: inherit;\n  float: left;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/app-settings/app-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-settings\">\n  <button mat-button [routerLink]=\"['./file-types'] \">\n    File types\n  </button>\n  <button mat-button [routerLink]=\"['./asset-category']\">\n    Asset category\n  </button>\n</div>\n\n<div class=\"setting-content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/component/page/app-settings/app-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_component__ = __webpack_require__("../../../../../src/component/page.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Alena Solonevich
 */
var AppSettingsComponent = (function (_super) {
    __extends(AppSettingsComponent, _super);
    function AppSettingsComponent() {
        return _super.call(this) || this;
    }
    return AppSettingsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__page_component__["a" /* PageComponent */]));
AppSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/component/page/app-settings/app-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/app-settings/app-settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppSettingsComponent);

//# sourceMappingURL=app-settings.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/app-settings/app-settings.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_security_service__ = __webpack_require__("../../../../../src/service/security.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The class is for activation rout guard.
 *
 * @author Denis Lesheniuk.
 */
var AppSettingsGuard = (function () {
    function AppSettingsGuard(security) {
        this.security = security;
    }
    AppSettingsGuard.prototype.canActivate = function (next, state) {
        return this.security.hasRole('ADMIN');
    };
    return AppSettingsGuard;
}());
AppSettingsGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_security_service__["a" /* SecurityService */]) === "function" && _a || Object])
], AppSettingsGuard);

var _a;
//# sourceMappingURL=app-settings.guard.js.map

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Asset category works!</p>\n"

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * @author Alena Solonevich
 */
var AssetCategoryComponent = (function () {
    function AssetCategoryComponent() {
    }
    AssetCategoryComponent.prototype.ngOnInit = function () {
    };
    return AssetCategoryComponent;
}());
AssetCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-asset-category',
        template: __webpack_require__("../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AssetCategoryComponent);

//# sourceMappingURL=asset-category.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/file-types.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/file-types.component.html":
/***/ (function(module, exports) {

module.exports = "<p>File types works!</p>\n"

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/file-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * @author Alena Solonevich
 */
var FileTypesComponent = (function () {
    function FileTypesComponent() {
    }
    FileTypesComponent.prototype.ngOnInit = function () {
    };
    return FileTypesComponent;
}());
FileTypesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-file-types',
        template: __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/file-types.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/app-settings/page/file-types/file-types.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated,
        preserveWhitespaces: true,
    }),
    __metadata("design:paramtypes", [])
], FileTypesComponent);

//# sourceMappingURL=file-types.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n<body>\n<p><img src=\"JMonkeyAssetStoreLogo.png\" height=\"314\" width=\"624\" alt=\"Here is my picture !\"/>\n</p>\n<p><img src=\"JMonkeyAssetStoreLogo-01.png\" height=\"314\" width=\"624\" alt=\"Here is my picture !\"/>\n</p>\n</body>\n"

/***/ }),

/***/ "../../../../../src/component/page/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_component__ = __webpack_require__("../../../../../src/component/page.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Alex Brui
 */
var DashboardComponent = (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent() {
        return _super.call(this) || this;
    }
    return DashboardComponent;
}(__WEBPACK_IMPORTED_MODULE_1__page_component__["a" /* PageComponent */]));
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/component/page/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.login-form-container {\n  width: 400px;\n  margin: 0 auto;\n  margin-top: 64px;\n}\n\n.login-form {\n}\n\n.login-data-form {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0px;\n  padding: 10px;\n  background-color: white;\n}\n\n.login-data-row {\n  width: 100%;\n  display: block;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n\n.login-button {\n  width: 100%;\n}\n\n.login-page-title {\n  color: #636363;\n  text-align: center;\n}\n\n.login-page-error {\n  color: #ff002b;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.login-text-container {\n  margin-bottom: 50px;\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\n  <div class=\"login-form\">\n\n    <div class=\"login-text-container\">\n      <h2 class=\"login-page-title\">Authentication</h2>\n      <h3 class=\"login-page-error\" [hidden]=\"error.length == 0\">\n        {{error}}\n      </h3>\n    </div>\n\n    <form class=\"login-data-form mat-elevation-z2\" (ngSubmit)=\"tryAuth()\" #userForm=\"ngForm\">\n      <mat-input-container class=\"login-data-row\">\n        <input matInput placeholder=\"Username\" id=\"username\" required minlength=\"{{minUsernameLength}}\"\n               maxlength=\"{{maxUsernameLength}}\"\n               [(ngModel)]=\"credentials.login\" name=\"name\"\n               #name=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"login-data-row\">\n        <input matInput placeholder=\"Password\" type=\"password\" id=\"password\" required minlength=\"{{minPasswordLength}}\"\n               maxlength=\"{{maxPasswordLength}}\"\n               [(ngModel)]=\"credentials.password\"\n               name=\"password\"\n               #password=\"ngModel\">\n      </mat-input-container>\n      <button class=\"login-data-row login-button\" mat-raised-button color=\"primary\"\n              [disabled]=\"!userForm.form.valid\">Login\n      </button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/component/page/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_user_credentials__ = __webpack_require__("../../../../../src/model/user/user-credentials.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_security_service__ = __webpack_require__("../../../../../src/service/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_component__ = __webpack_require__("../../../../../src/component/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @author Alex Brui
 */
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(security, router) {
        var _this = _super.call(this) || this;
        _this.security = security;
        _this.router = router;
        _this.credentials = new __WEBPACK_IMPORTED_MODULE_1__model_user_user_credentials__["a" /* UserCredentials */]('', '');
        _this.error = '';
        return _this;
    }
    /**
     * Try to auth using the current info.
     */
    LoginComponent.prototype.tryAuth = function () {
        var _this = this;
        this.security.auth(this.credentials, function (message, result) {
            if (result) {
                _this.error = '';
                _this.credentials.login = '';
                _this.credentials.password = '';
                _this.router.navigateByUrl('/');
            }
            else {
                _this.error = message;
            }
        });
    };
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_3__page_component__["a" /* PageComponent */]));
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/component/page/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.register-form-container {\n  width: 500px;\n  margin: 0 auto;\n  margin-top: 64px;\n}\n\n.register-form {\n}\n\n.register-data-form {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0px;\n  padding: 10px;\n  background-color: white;\n}\n\n.register-data-row {\n  width: 100%;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.register-button {\n  width: 100%;\n}\n\n.register-page-title {\n  color: #636363;\n  text-align: center;\n}\n\n.register-page-error {\n  color: #ff002b;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.register-text-container {\n  margin-bottom: 50px;\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-form-container\">\n  <div class=\"register-form\">\n    <form class=\"register-data-form mat-elevation-z2\" (ngSubmit)=\"tryRegister()\" #registerForm=\"ngForm\">\n      <div class=\"register-text-container\">\n        <h2 class=\"register-page-title\">Register a new user</h2>\n        <h3 class=\"register-page-error\" [hidden]=\"error.length == 0\">\n          {{error}}\n        </h3>\n      </div>\n      <mat-input-container class=\"register-data-row\">\n        <input matInput placeholder=\"Username\" id=\"username\" required minlength=\"{{minUsernameLength}}\"\n               maxlength=\"{{maxUsernameLength}}\"\n               [(ngModel)]=\"info.login\" name=\"userName\"\n               #name=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"register-data-row\">\n        <input matInput placeholder=\"First name\" id=\"firstName\"\n               [(ngModel)]=\"info.firstName\" name=\"firstName\"\n               #firstName=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"register-data-row\">\n        <input matInput placeholder=\"Last name\" id=\"lastName\"\n               [(ngModel)]=\"info.lastName\" name=\"lastName\"\n               #lastName=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"register-data-row\">\n        <input matInput placeholder=\"Middle name\" id=\"middleName\"\n               [(ngModel)]=\"info.middleName\" name=\"middleName\"\n               #middleName=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"register-data-row\">\n        <input matInput placeholder=\"Email\" type=\"email\" id=\"mail\"\n               isEmail\n               [(ngModel)]=\"info.mail\" name=\"mail\"\n               #mail=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"register-data-row\">\n        <input matInput placeholder=\"Password\" type=\"password\" id=\"password\" required minlength=\"{{minPasswordLength}}\"\n               maxlength=\"{{maxPasswordLength}}\"\n               [(ngModel)]=\"info.password\"\n               name=\"password\"\n               #password=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"register-data-row\">\n        <input matInput placeholder=\"Confirm Password\" type=\"password\"\n               id=\"confirmPassword\" required minlength=\"{{minPasswordLength}}\"\n               maxlength=\"{{maxPasswordLength}}\"\n               equals=\"password\"\n               [(ngModel)]=\"info.confirmPassword\"\n               name=\"confirmPassword\"\n               #confirmPassword=\"ngModel\">\n      </mat-input-container>\n\n      <mat-input-container>\n        <mat-select placeholder=\"Choose your role\" [(ngModel)]=\"selectedRole\" name=\"role\">\n          <mat-option *ngFor=\"let role of availableRoles\" [value]=\"role.value\">\n            {{ role.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-input-container>\n\n      <button class=\"register-data-row register-button\" type=\"submit\" mat-raised-button color=\"primary\"\n              [disabled]=\"!registerForm.form.valid\">Register\n      </button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/component/page/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_component__ = __webpack_require__("../../../../../src/component/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_security_service__ = __webpack_require__("../../../../../src/service/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user_register_user_credentials__ = __webpack_require__("../../../../../src/model/user/register-user-credentials.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * The components provides sets of methods for user registration.
 *
 * @author Alex Brui
 */
var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(security, router) {
        var _this = _super.call(this) || this;
        _this.security = security;
        _this.router = router;
        /**
         * List of available roles
         */
        _this._availableRoles = [
            { value: __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_USER, viewValue: 'User' },
            { value: __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_ARTIST, viewValue: 'Artist' }
        ];
        _this._info = new __WEBPACK_IMPORTED_MODULE_4__model_user_register_user_credentials__["a" /* RegisterUserCredentials */]('', '', '', '', '', '', _this._roles, '');
        _this._error = '';
        _this._info.roles = [];
        return _this;
    }
    /**
     * Try to register using the current info.
     */
    RegisterComponent.prototype.tryRegister = function () {
        var _this = this;
        this.setRoleList();
        this.security.register(this._info, function (message, result) {
            if (result) {
                var info = _this.info;
                info.login = '';
                info.password = '';
                info.firstName = '';
                info.lastName = '';
                info.middleName = '';
                info.mail = '';
                info.confirmPassword = '';
                _this.router.navigateByUrl('/login');
                _this._error = '';
            }
            else {
                _this._error = message;
            }
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "info", {
        /**
         * Gets the user info.
         *
         * @returns {RegisterUserCredentials}
         */
        get: function () {
            return this._info;
        },
        /**
         * Sets the user info.
         *
         * @param {RegisterUserCredentials} value
         */
        set: function (value) {
            this._info = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "error", {
        /**
         * Gets the error.
         *
         * @returns {string}
         */
        get: function () {
            return this._error;
        },
        /**
         * Sets the error.
         *
         * @param {string} value
         */
        set: function (value) {
            this._error = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "selectedRole", {
        /**
         * Gets the selected by user role.
         *
         * @returns {string}
         */
        get: function () {
            return this._selectedRole;
        },
        /**
         * Sets the selected by user role.
         *
         * @param {string} value
         */
        set: function (value) {
            this._selectedRole = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "availableRoles", {
        /**
         * Gets the list of the available roles.
         *
         * @returns {{value: string; viewValue: string}[]}
         */
        get: function () {
            return this._availableRoles;
        },
        /**
         * Sets the list of the available roles.
         *
         * @param {{value: string; viewValue: string}[]} value
         */
        set: function (value) {
            this._availableRoles = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "roles", {
        /**
         * Gets the list of user roles.
         *
         * @returns {string[]}
         */
        get: function () {
            return this._roles;
        },
        /**
         * Set the list of user roles.
         *
         * @param {string[]} value
         */
        set: function (value) {
            this._roles = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Based on the user's choice, the method fills the list of user's roles.
     */
    RegisterComponent.prototype.setRoleList = function () {
        switch (this._selectedRole) {
            case __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_USER: {
                this._info.roles.push(__WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_USER);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_ARTIST: {
                this._info.roles.push(__WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_USER, __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_ARTIST);
                break;
            }
            default: {
                this._info.roles.push(__WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */].ROLE_USER);
                break;
            }
        }
    };
    return RegisterComponent;
}(__WEBPACK_IMPORTED_MODULE_1__page_component__["a" /* PageComponent */]));
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/component/page/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/register/register.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_security_service__["a" /* SecurityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("../../../../../src/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/model/user/register-user-credentials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserCredentials; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_credentials__ = __webpack_require__("../../../../../src/model/user/user-credentials.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * The information to register a new user.
 *
 * @author Alex Brui
 */
var RegisterUserCredentials = (function (_super) {
    __extends(RegisterUserCredentials, _super);
    function RegisterUserCredentials(login, password, userName, lastName, middleName, mail, roles, confirmPassword) {
        var _this = _super.call(this, login, password) || this;
        _this.firstName = userName;
        _this.lastName = lastName;
        _this.middleName = middleName;
        _this.mail = mail;
        _this.roles = roles;
        _this.confirmPassword = confirmPassword;
        return _this;
    }
    return RegisterUserCredentials;
}(__WEBPACK_IMPORTED_MODULE_0__user_credentials__["a" /* UserCredentials */]));

//# sourceMappingURL=register-user-credentials.js.map

/***/ }),

/***/ "../../../../../src/model/user/user-credentials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCredentials; });
/**
 * The information to auth in the system.
 *
 * @author Alex Brui
 */
var UserCredentials = (function () {
    function UserCredentials(username, password) {
        this.password = password;
        this.login = username;
    }
    return UserCredentials;
}());

//# sourceMappingURL=user-credentials.js.map

/***/ }),

/***/ "../../../../../src/model/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * The user model.
 *
 * @author Alex Brui
 */
var User = (function () {
    /**
     * Create a user with the name, the access token and the roles.
     *
     * @param name the name.
     * @param accessToken the access token.
     * @param roles the roles.
     */
    function User(name, accessToken, roles) {
        this._name = name;
        this._accessToken = accessToken;
        this._roles = roles;
    }
    Object.defineProperty(User.prototype, "accessToken", {
        /**
         * Get an access token of this user or null.
         *
         * @returns {string} the access token.
         */
        get: function () {
            return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        /**
         * Get a name of this user.
         *
         * @returns {string} the user name.
         */
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "roles", {
        /**
         * Get an available roles of this user.
         *
         * @returns {string[]} the array of available roles.
         */
        get: function () {
            return this._roles;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/service/security.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utils__ = __webpack_require__("../../../../../src/util/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_user__ = __webpack_require__("../../../../../src/model/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SecurityService = SecurityService_1 = (function () {
    function SecurityService(http) {
        this.http = http;
        this._authProperty = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    /**
     * The function to auth a user in the system.
     *
     * @param credentials the credentials.
     * @param handler to handle result of authentication.
     */
    SecurityService.prototype.auth = function (credentials, handler) {
        var _this = this;
        var username = credentials.login;
        this.http.post(SecurityService_1.AUTH_URL, credentials)
            .toPromise()
            .then(function (response) {
            var body = response.json();
            _this._user = new __WEBPACK_IMPORTED_MODULE_3__model_user_user__["a" /* User */](username, body.token, body.roles);
            _this._authProperty.next(true);
            handler(null, true);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleErrorMessageJson(error, function (ex) { return handler(ex, false); }); });
    };
    /**
     * The function to register a user in the system.
     *
     * @param credentials the credentials.
     * @param handler to handle result of registration.
     */
    SecurityService.prototype.register = function (credentials, handler) {
        this.http.post(SecurityService_1.REGISTER_URL, credentials)
            .toPromise()
            .then(function (response) { return handler(null, true); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleErrorMessageJson(error, function (ex) { return handler(ex, false); }); });
    };
    /**
     * Add an access token to header of the request options.
     *
     * @param requestOptions the request options.
     */
    SecurityService.prototype.addAccessToken = function (requestOptions) {
        var accessToken = this.accessToken;
        if (accessToken != null) {
            requestOptions.headers.append(SecurityService_1.ACCESS_TOKEN_HEADER, accessToken);
        }
    };
    /**
     * The function to logout from the system.
     */
    SecurityService.prototype.logout = function () {
        this._user = null;
        this._authProperty.next(false);
    };
    Object.defineProperty(SecurityService.prototype, "authProperty", {
        /**
         * Get the auth property.
         *
         * @returns {Observable<boolean>} the auth property.
         */
        get: function () {
            return this._authProperty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecurityService.prototype, "user", {
        /**
         * Get the current user.
         *
         * @returns {User} the current user.
         */
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecurityService.prototype, "accessToken", {
        /**
         * Get the current access token.
         *
         * @returns {string} the current access token.
         */
        get: function () {
            var currentUser = this.user;
            if (currentUser == null) {
                return null;
            }
            return currentUser.accessToken;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check the role in the current user.
     *
     * @param {string} toCheck the role to check.
     * @returns {boolean} true if the current user has the role.
     */
    SecurityService.prototype.hasRole = function (toCheck) {
        var currentUser = this.user;
        if (currentUser == null) {
            return false;
        }
        var roles = currentUser.roles;
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            if (role === toCheck) {
                return true;
            }
        }
        return false;
    };
    return SecurityService;
}());
SecurityService.ROLE_USER = 'USER';
SecurityService.ROLE_ARTIST = 'ARTIST';
/**
 * The url of auth endpoint.
 *
 * @type {string}
 */
SecurityService.AUTH_URL = '/users/authorization';
/**
 * The url of register endpoint.
 *
 * @type {string}
 */
SecurityService.REGISTER_URL = '/users/register';
/**
 * The name of access token header.
 *
 * @type {string}
 */
SecurityService.ACCESS_TOKEN_HEADER = 'X-Access-Token';
SecurityService = SecurityService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SecurityService);

var SecurityService_1, _a;
//# sourceMappingURL=security.service.js.map

/***/ }),

/***/ "../../../../../src/util/route-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteList; });
/**
 * The class with all route's constants.
 *
 * @author Alex Brui
 */
var RouteList = (function () {
    function RouteList() {
    }
    return RouteList;
}());

RouteList.PAGE_LOGIN = 'login';
RouteList.PAGE_DASHBOARD = 'dashboard';
RouteList.PAGE_REGISTER = 'register';
RouteList.PAGE_APP_SETTINGS = 'app-settings';
RouteList.PAGE_FILE_TYPES = "file-types";
RouteList.PAGE_ASSET_CATEGORY = "asset-category";
//# sourceMappingURL=route-list.js.map

/***/ }),

/***/ "../../../../../src/util/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");


/**
 * @author Alex Brui
 */
var Utils = (function () {
    function Utils() {
    }
    /**
     * The method to handle an error from http request.
     *
     * @param error the error.
     * @param handler the error message consumer.
     * @returns {ErrorObservable}
     */
    Utils.handleErrorMessage = function (error, handler) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            errMsg = error.text();
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        handler(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    /**
     * The method to handle an error from http request.
     *
     * @param error the error from the Json obj.
     * @param handler the error message consumer.
     * @returns {ErrorObservable}
     */
    Utils.handleErrorMessageJson = function (error, handler) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json();
            errMsg = body.message;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        handler(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/validate/email-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailValidatorDirective = EmailValidatorDirective_1 = (function () {
    function EmailValidatorDirective() {
    }
    /**
     * The implementation of custom validation for email validate.
     *
     * @param {AbstractControl} control
     * @returns {{[p: string]: any}} null if form is valid, if not - validation error.
     */
    EmailValidatorDirective.prototype.validate = function (control) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        var valid = emailRegEx.test(control.value);
        if (control.value < 1) {
            return null;
        }
        else
            return valid ? null : { 'isEmail': true };
    };
    return EmailValidatorDirective;
}());
EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[isEmail]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: EmailValidatorDirective_1, multi: true }]
    })
    /**
     * The implementation of {@link Validator} interface
     * provides method for custom form validation.
     *
     * @author Denis Lesheniuk.
     */
    ,
    __metadata("design:paramtypes", [])
], EmailValidatorDirective);

var EmailValidatorDirective_1;
//# sourceMappingURL=email-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/validate/equals-validator.derective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualsValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EqualsValidatorDirective = EqualsValidatorDirective_1 = (function () {
    /**
     * The implementation of {@link Validator} interface
     * provides method for custom form validation.
     *
     * @author Denis Lesheniuk.
     */
    function EqualsValidatorDirective() {
    }
    /**
     * The implementation of custom validation for
     * comparing values of two fields .
     *
     * @param {AbstractControl} control is the form control.
     * @returns {{[p: string]: any}} null if form is valid, if not - validation error.
     */
    EqualsValidatorDirective.prototype.validate = function (control) {
        var value = control.value;
        var parent = control.parent;
        var targetControl = parent.get(this.equals);
        if (targetControl == null)
            return null;
        var result = value === targetControl.value;
        return result ? null : { this: { value: value } };
    };
    return EqualsValidatorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], EqualsValidatorDirective.prototype, "equals", void 0);
EqualsValidatorDirective = EqualsValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[equals]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */],
                useExisting: EqualsValidatorDirective_1,
                multi: true
            }]
    })
    /**
     * The implementation of {@link Validator} interface
     * provides method for custom form validation.
     *
     * @author Denis Lesheniuk.
     */
], EqualsValidatorDirective);

var EqualsValidatorDirective_1;
//# sourceMappingURL=equals-validator.derective.js.map

/***/ }),

/***/ "../../../../../src/validate/validator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals_validator_derective__ = __webpack_require__("../../../../../src/validate/equals-validator.derective.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_validator_directive__ = __webpack_require__("../../../../../src/validate/email-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ValidatorModule = (function () {
    function ValidatorModule() {
    }
    return ValidatorModule;
}());
ValidatorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__equals_validator_derective__["a" /* EqualsValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_3__email_validator_directive__["a" /* EmailValidatorDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__equals_validator_derective__["a" /* EqualsValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_3__email_validator_directive__["a" /* EmailValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ]
    })
], ValidatorModule);

//# sourceMappingURL=validator.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map