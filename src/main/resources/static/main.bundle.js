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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<mat-toolbar class=\"app-bar mat-elevation-z6\" color=\"primary\">\r\n  <button mat-button class=\"m-toolbar-button\" routerLink=\"/dashboard\" routerLinkActive=\"m-toolbar-button-active\">Home\r\n  </button>\r\n  <span class=\"app-toolbar-filler\"></span>\r\n  <button mat-button class=\"m-toolbar-button\" *ngIf=\"!authed\" routerLink=\"/login\"\r\n          routerLinkActive=\"m-toolbar-button-active\">Login\r\n  </button>\r\n  <button mat-button class=\"m-toolbar-button\" *ngIf=\"!authed\" routerLink=\"/register\"\r\n          routerLinkActive=\"m-toolbar-button-active\">Register\r\n  </button>\r\n  <button mat-button class=\"m-toolbar-button\" *ngIf=\"authed\" routerLink=\"/\" (click)=\"logout()\">Logout</button>\r\n</mat-toolbar>\r\n<div class=\"root-content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

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
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatToolbarModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__service_security_service__["a" /* SecurityService */]],
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

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

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
exports.push([module.i, "\r\n.login-form-container {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  margin-top: 64px;\r\n}\r\n\r\n.login-form {\r\n}\r\n\r\n.login-data-form {\r\n  border-collapse: collapse;\r\n  border-radius: 2px;\r\n  border-spacing: 0px;\r\n  padding: 10px;\r\n  background-color: white;\r\n}\r\n\r\n.login-data-row {\r\n  width: 100%;\r\n  display: block;\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.login-button {\r\n  width: 100%;\r\n}\r\n\r\n.login-page-title {\r\n  color: #636363;\r\n  text-align: center;\r\n}\r\n\r\n.login-page-error {\r\n  color: #ff002b;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.login-text-container {\r\n  margin-bottom: 50px;\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\r\n  <div class=\"login-form\">\r\n\r\n    <div class=\"login-text-container\">\r\n      <h2 class=\"login-page-title\">Authentication</h2>\r\n      <h3 class=\"login-page-error\" [hidden]=\"error.length == 0\">\r\n        {{error}}\r\n      </h3>\r\n    </div>\r\n\r\n    <form class=\"login-data-form mat-elevation-z2\" (ngSubmit)=\"tryAuth()\" #userForm=\"ngForm\">\r\n      <mat-input-container class=\"login-data-row\">\r\n        <input matInput placeholder=\"Username\" id=\"username\" required minlength=\"{{minUsernameLength}}\"\r\n               maxlength=\"{{maxUsernameLength}}\"\r\n               [(ngModel)]=\"credentials.username\" name=\"name\"\r\n               #name=\"ngModel\">\r\n      </mat-input-container>\r\n      <mat-input-container class=\"login-data-row\">\r\n        <input matInput placeholder=\"Password\" type=\"password\" id=\"password\" required minlength=\"{{minPasswordLength}}\"\r\n               maxlength=\"{{maxPasswordLength}}\"\r\n               [(ngModel)]=\"credentials.password\"\r\n               name=\"password\"\r\n               #password=\"ngModel\">\r\n      </mat-input-container>\r\n      <button class=\"login-data-row login-button\" mat-raised-button color=\"primary\"\r\n              [disabled]=\"!userForm.form.valid\">Login\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

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
                _this.credentials.username = '';
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
exports.push([module.i, "\r\n.register-form-container {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  margin-top: 64px;\r\n}\r\n\r\n.register-form {\r\n}\r\n\r\n.register-data-form {\r\n  border-collapse: collapse;\r\n  border-radius: 2px;\r\n  border-spacing: 0px;\r\n  padding: 10px;\r\n  background-color: white;\r\n}\r\n\r\n.register-data-row {\r\n  width: 100%;\r\n  display: block;\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.register-button {\r\n  width: 100%;\r\n}\r\n\r\n.register-page-title {\r\n  color: #636363;\r\n  text-align: center;\r\n}\r\n\r\n.register-page-error {\r\n  color: #ff002b;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.register-text-container {\r\n  margin-bottom: 50px;\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-form-container\">\r\n  <div class=\"register-form\">\r\n\r\n    <div class=\"register-text-container\">\r\n      <h2 class=\"register-page-title\">Register a new user</h2>\r\n      <h3 class=\"register-page-error\" [hidden]=\"error.length == 0\">\r\n        {{error}}\r\n      </h3>\r\n    </div>\r\n\r\n    <form class=\"register-data-form mat-elevation-z2\" (ngSubmit)=\"tryRegister()\" #registerForm=\"ngForm\">\r\n      <button class=\"register-data-row register-button\" type=\"submit\" mat-raised-button color=\"primary\"\r\n              [disabled]=\"!registerForm.form.valid\">Register\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

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
 * @author Alex Brui
 */
var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(security, router) {
        var _this = _super.call(this) || this;
        _this.security = security;
        _this.router = router;
        _this._info = new __WEBPACK_IMPORTED_MODULE_4__model_user_register_user_credentials__["a" /* RegisterUserCredentials */]('', '', '');
        _this._error = '';
        return _this;
    }
    /**
     * Try to register using the current info.
     */
    RegisterComponent.prototype.tryRegister = function () {
        var _this = this;
        this.security.register(this._info, function (message, result) {
            if (result) {
                _this._error = '';
                _this._info.username = '';
                _this._info.password = '';
                _this._info.confirmPassword = '';
                _this.router.navigateByUrl('/login');
            }
            else {
                _this._error = message;
            }
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "info", {
        get: function () {
            return this._info;
        },
        set: function (value) {
            this._info = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = value;
        },
        enumerable: true,
        configurable: true
    });
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
 * @author JavaSaBr
 */
var RegisterUserCredentials = (function (_super) {
    __extends(RegisterUserCredentials, _super);
    function RegisterUserCredentials(username, password, repeatPassword) {
        var _this = _super.call(this, username, password) || this;
        _this.confirmPassword = repeatPassword;
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
        this.username = username;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
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
        this._authProperty = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    /**
     * The function to auth a user in the system.
     *
     * @param credentials the credentials.
     * @param handler to handle result of authentication.
     */
    SecurityService.prototype.auth = function (credentials, handler) {
        var _this = this;
        var username = credentials.username;
        this.http.post(SecurityService_1.AUTH_URL, credentials)
            .toPromise()
            .then(function (response) {
            var body = response.json();
            _this._user = new __WEBPACK_IMPORTED_MODULE_3__model_user_user__["a" /* User */](username, body.token, body.roles);
            _this._authProperty.next(true);
            handler(null, true);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleErrorMessage(error, function (ex) { return handler(ex, false); }); });
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
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleErrorMessage(error, function (ex) { return handler(ex, false); }); });
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
            var currentUser = this._user;
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
        var currentUser = this._user;
        if (currentUser == null) {
            return null;
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
SecurityService.ROLE_ADMIN = 'ADMIN';
SecurityService.ROLE_USER = 'USER';
SecurityService.ROLE_CUSTOMER = 'CUSTOMER';
/**
 * The url of auth endpoint.
 *
 * @type {string}
 */
SecurityService.AUTH_URL = '/?/authenticate';
/**
 * The url of register endpoint.
 *
 * @type {string}
 */
SecurityService.REGISTER_URL = '/?/register';
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
//# sourceMappingURL=route-list.js.map

/***/ }),

/***/ "../../../../../src/util/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);


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
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map