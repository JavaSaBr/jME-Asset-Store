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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_page_app_settings_page_file_types_add_file_type_add_file_type_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/add-file-type/add-file-type.component.ts");
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
            {
                path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_FILE_TYPES, component: __WEBPACK_IMPORTED_MODULE_8__component_page_app_settings_page_file_types_file_types_component__["a" /* FileTypesComponent */], children: [
                    { path: __WEBPACK_IMPORTED_MODULE_3__util_route_list__["a" /* RouteList */].PAGE_ADD_FILE_TYPE, component: __WEBPACK_IMPORTED_MODULE_11__component_page_app_settings_page_file_types_add_file_type_add_file_type_component__["a" /* AddFileTypeComponent */] }
                ]
            },
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
AppComponent.MIN_FILE_TYPE_NAME = 3;
AppComponent.MAX_FILE_TYPE_NAME = 25;
AppComponent.MIN_FILE_TYPE_MIME = 3;
AppComponent.MAX_FILE_TYPE_MIME = 25;
AppComponent.MIN_FILE_TYPE_EXTENSION = 2;
AppComponent.MAX_FILE_TYPE_EXTENSION = 5;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validate_validator_module__ = __webpack_require__("../../../../../src/validate/validator.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_page_app_settings_page_asset_category_asset_category_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_page_app_settings_app_settings_guard__ = __webpack_require__("../../../../../src/component/page/app-settings/app-settings.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_file_types_service__ = __webpack_require__("../../../../../src/service/file-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_page_app_settings_page_file_types_file_types_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/file-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_page_app_settings_page_file_types_add_file_type_add_file_type_component__ = __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/add-file-type/add-file-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_file_type_data_source__ = __webpack_require__("../../../../../src/service/file-type-data-source.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_asset_category_service__ = __webpack_require__("../../../../../src/service/asset-category.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControlDirective */],
            __WEBPACK_IMPORTED_MODULE_18__component_page_app_settings_page_file_types_file_types_component__["a" /* FileTypesComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControlDirective */],
            __WEBPACK_IMPORTED_MODULE_14__component_page_app_settings_page_asset_category_asset_category_component__["a" /* AssetCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__component_page_app_settings_page_file_types_add_file_type_add_file_type_component__["a" /* AddFileTypeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_13__validate_validator_module__["a" /* ValidatorModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatTableModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__service_security_service__["a" /* SecurityService */], __WEBPACK_IMPORTED_MODULE_20__service_file_type_data_source__["a" /* FileTypeDataSource */], __WEBPACK_IMPORTED_MODULE_16__component_page_app_settings_app_settings_guard__["a" /* AppSettingsGuard */], __WEBPACK_IMPORTED_MODULE_17__service_file_types_service__["a" /* FileTypesService */], __WEBPACK_IMPORTED_MODULE_21__service_asset_category_service__["a" /* AssetCategoryService */]],
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
    Object.defineProperty(PageComponent.prototype, "minFileTypeName", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MIN_FILE_TYPE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "maxFileTypeName", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MAX_FILE_TYPE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "minFileTypeMime", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MIN_FILE_TYPE_MIME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "maxFileTypeMime", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MAX_FILE_TYPE_MIME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "minFileTypeExtension", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MIN_FILE_TYPE_EXTENSION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "maxFileTypeExtension", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */].MAX_FILE_TYPE_EXTENSION;
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
exports.push([module.i, "\n.app-settings {\n  width: 250px;\n  height: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #636363;\n  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.30);\n  position: absolute;\n}\n\n.mat-button {\n  width: 100%;\n  border-bottom: 2px solid #e8e8e8;\n  text-align: left;\n}\n\n.mat-button:hover {\n  font-weight: bold;\n}\n\n.setting-content {\n  margin-left: 250px;\n  font-size: 1em;\n  color: #636363;\n  font-family: inherit;\n  float: left;\n  width: 80%;\n  height: 100%;\n  text-align: center;\n}\n", ""]);

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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu+Condensed);", ""]);

// module
exports.push([module.i, ".menu-main {\n  list-style: none;\n  margin: 10px 0 5px;\n  padding: 10px 0 5px;\n  text-align: left;\n}\n\n.menu-main li {\n  display: inline-block;\n}\n\n.menu-main li:after {\n  content: \"/\";\n  color: #606060;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.menu-main li:last-child:after {\n  content: none;\n}\n\n.menu-main div {\n  text-decoration: none;\n  font-family: 'Ubuntu Condensed', sans-serif;\n  letter-spacing: 2px;\n  position: relative;\n  padding-bottom: 20px;\n  margin: 0 34px 0 30px;\n  font-size: 17px;\n  text-transform: uppercase;\n  display: inline-block;\n  transition: color .2s;\n}\n\n.menu-main div, .menu-main div:visited {\n  color: #9d999d;\n}\n\n.menu-main div.current, .menu-main div:hover {\n  color: #4f54fe;\n}\n\n.menu-main div:before,\n.menu-main div:after {\n  content: \"\";\n  position: absolute;\n  height: 4px;\n  top: auto;\n  right: 50%;\n  bottom: -5px;\n  left: 50%;\n  background: #4f54fe;\n  transition: .8s;\n}\n\n.menu-main div:hover:before, .menu-main .current:before {\n  left: 0;\n}\n\n.menu-main div:hover:after, .menu-main .current:after {\n  right: 0;\n}\n\n@media (max-width: 550px) {\n  .menu-main {\n    padding-top: 0;\n  }\n\n  .menu-main li {\n    display: block;\n  }\n\n  .menu-main li:after {\n    content: none;\n  }\n\n  .menu-main div {\n    padding: 25px 0 20px;\n    margin: 0 30px;\n  }\n}\n\n.components {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[5];\n      grid-template-columns: repeat(5, 1fr);\n  grid-gap: 20px;\n}\n\n.container {\n  margin: 20px;\n}\n\n.components {\n  list-style-type: none;\n  width: 500px;\n}\n\n.container li {\n  height: 224px;\n}\n\n.container h3 {\n  margin-top: 0;\n  font: bold 20px/1.5 Helvetica, Verdana, sans-serif;\n}\n\n.container li p {\n  font: 200 12px/1.5 Georgia, Times New Roman, serif;\n}\n\n.category-container {\n  background-color: #e8e8e8;\n  width: 150px;\n  height: 224px;\n  padding: 10px;\n  overflow: auto;\n}\n\n.container div {\n  width: 150px;\n  height: 200px;\n}\n\n.container li:hover {\n  background: rgb(206, 206, 206);\n  cursor: pointer;\n}\n\n.material-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\n.material-icons.md-56 {\n  font-size: 56px;\n}\n\n.add-container {\n  width: 150px;\n  height: 224px;\n  padding: 10px;\n  overflow: auto;\n}\n\n.category-container i {\n  position: relative;\n  height: 24px;\n  width: 24px;\n}\n\n.input-form-field {\n  width: 150px;\n}\n\n.input-form button {\n  width: 90%;\n  height: 35px;\n  margin-top: 2px;\n}\n\n.register-page-error {\n  color: #ff002b;\n  text-align: center;\n  margin-top: 10px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Asset category settings</h1>\n<h3 class=\"register-page-error\" [hidden]=\"error.length == 0\">\n  {{error}}\n</h3>\n<ul class=\"menu-main\">\n  <li *ngFor=\"let p of path\">\n    <div (click)=\"setTopOfPath(p.id)\">\n      {{p.name}}\n    </div>\n  </li>\n</ul>\n<div class=\"container\">\n  <ul class=\"components\">\n    <li class=\"category-container\" *ngFor=\"let category of categories\">\n      <i class=\"material-icons\" (click)=\"deleteCategory(category.id)\">clear</i>\n      <div class=\"category-content\" (click)=\"loadChildren(category.name, category.id)\">\n        <h3>{{category.name}}</h3>\n        <p>{{category.description}}</p>\n      </div>\n    </li>\n    <li class=\"add-container\">\n      <i class=\"material-icons md-56\" *ngIf=\"!trigger\" (click)=\"switchLabel()\">add_circle_outline</i>\n      <form class=\"input-form\" #registerForm=\"ngForm\" *ngIf=\"trigger\" >\n        <mat-form-field class=\"input-form-field\">\n          <input matInput placeholder=\"Name\" [(ngModel)]=\"categoryParam.name\" name=\"name\" required minlength=\"5\">\n        </mat-form-field>\n        <mat-form-field class=\"input-form-field\">\n          <textarea matInput placeholder=\"Description\" [(ngModel)]=\"categoryParam.description\"\n                    name=\"description\"></textarea>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" (click)=\"switchLabel()\">Cancel</button>\n        <button mat-raised-button color=\"primary\" [disabled]=\"!registerForm.form.valid\" (click)=\"addCategory()\">Add</button>\n      </form>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_category_category_component__ = __webpack_require__("../../../../../src/model/category/category-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_asset_category_service__ = __webpack_require__("../../../../../src/service/asset-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_category_asset_category_param__ = __webpack_require__("../../../../../src/model/category/asset-category-param.ts");
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
 * Implementation of logic for UI for work with asset category.
 *
 * @author Denis Lesheniuk.
 */
var AssetCategoryComponent = (function () {
    function AssetCategoryComponent(categoryService) {
        this.categoryService = categoryService;
    }
    AssetCategoryComponent.prototype.ngOnInit = function () {
        this.error = '';
        this.categoryParam = new __WEBPACK_IMPORTED_MODULE_3__model_category_asset_category_param__["a" /* AssetCategoryParam */];
        this.label = false;
        this.path = [];
        this.path.push(new __WEBPACK_IMPORTED_MODULE_1__model_category_category_component__["a" /* CategoryComponent */]("Home", null));
        this.loadCategories();
    };
    /**
     * Get the categories.
     */
    AssetCategoryComponent.prototype.loadCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .then(function (value) { return _this.categories = value; });
    };
    /**
     * Add the category.
     */
    AssetCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        var path = this.path;
        var categoryParam = this.categoryParam;
        categoryParam.id = path[path.length - 1].id;
        this.categoryService.addCategory(this.categoryParam, function (message, result) {
            if (result) {
                categoryParam.name = '';
                categoryParam.description = '';
                categoryParam.id = '';
                _this.error = '';
                _this.label = false;
                _this.refreshFor(_this.getLastPathElement().id);
            }
            else {
                _this.error = message;
            }
        });
    };
    /**
     * Delete the category.
     *
     * @param {string} id the id of the category.
     */
    AssetCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this.categoryService.removeCategory(id, function (message, result) {
            if (result) {
                _this.refreshFor(_this.getLastPathElement().id);
            }
            else {
                _this.error = message;
            }
        });
    };
    /**
     * Load the children.
     *
     * @param {string} name the name of the category.
     * @param {string} id the id of the category.
     */
    AssetCategoryComponent.prototype.loadChildren = function (name, id) {
        var _this = this;
        this.categoryService.getChildren(id)
            .then(function (value) {
            _this.categories = value;
            _this.path.push(new __WEBPACK_IMPORTED_MODULE_1__model_category_category_component__["a" /* CategoryComponent */](name, id));
        });
    };
    /**
     * Refreshing value of this._categories for the id.
     *
     * @param {string} id the id of the category.
     */
    AssetCategoryComponent.prototype.refreshFor = function (id) {
        var _this = this;
        if (id == null) {
            this.loadCategories();
        }
        else {
            this.categoryService.getChildren(id)
                .then(function (value) { return _this.categories = value; });
        }
    };
    /**
     * The method switch value of the label.
     */
    AssetCategoryComponent.prototype.switchLabel = function () {
        this.label = !this.label;
        var categoryParam = this.categoryParam;
        categoryParam.name = '';
        categoryParam.description = '';
    };
    /**
     * Get the last element of the this._path.
     *
     * @returns {CategoryComponent} the last component.
     */
    AssetCategoryComponent.prototype.getLastPathElement = function () {
        return this.path[this.path.length - 1];
    };
    /**
     * Set the current top of path.
     *
     * @param {string} componentId the top component id.
     */
    AssetCategoryComponent.prototype.setTopOfPath = function (componentId) {
        for (var i = this.path.length - 1; i >= 0; i--) {
            var component = this.path[i];
            if (component.id != componentId) {
                this.path.pop();
            }
            else {
                this.refreshFor(this.getLastPathElement().id);
                return;
            }
        }
    };
    Object.defineProperty(AssetCategoryComponent.prototype, "categories", {
        /**
         * Get the categories
         *
         */
        get: function () {
            return this._categories;
        },
        /**
         * Set the categories.
         *
         */
        set: function (value) {
            this._categories = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetCategoryComponent.prototype, "path", {
        /**
         * Get the path.
         *
         * @returns {AssetCategoryComponent[]} the path.
         */
        get: function () {
            return this._path;
        },
        /**
         * Set the path.
         *
         * @param {AssetCategoryComponent[]} value the path.
         */
        set: function (value) {
            this._path = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetCategoryComponent.prototype, "trigger", {
        /**
         * Get the add trigger.
         *
         * @returns {boolean} the trigger.
         */
        get: function () {
            return this._label;
        },
        /**
         * Set the add trigger.
         *
         * @param {boolean} value the trigger.
         */
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetCategoryComponent.prototype, "categoryParam", {
        /**
         * Get the asset category param.
         *
         * @returns {AssetCategoryParam} the asset category param.
         */
        get: function () {
            return this._categoryParam;
        },
        /**
         * Set the category param.
         *
         * @param {AssetCategoryParam} value the asset category param.
         */
        set: function (value) {
            this._categoryParam = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetCategoryComponent.prototype, "error", {
        /**
         * Get the error.
         *
         * @returns {string} the error.
         */
        get: function () {
            return this._error;
        },
        /**
         * Set the error.
         *
         * @param {string} value the error.
         */
        set: function (value) {
            this._error = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetCategoryComponent.prototype, "label", {
        /**
         * Get the label.
         *
         * @returns {boolean} the label.
         */
        get: function () {
            return this._label;
        },
        /**
         * Set the label.
         *
         * @param {boolean} value the label.
         */
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    return AssetCategoryComponent;
}());
AssetCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-asset-category',
        template: __webpack_require__("../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/app-settings/page/asset-category/asset-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_asset_category_service__["a" /* AssetCategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_asset_category_service__["a" /* AssetCategoryService */]) === "function" && _a || Object])
], AssetCategoryComponent);

var _a;
//# sourceMappingURL=asset-category.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/add-file-type/add-file-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.add-file-type-form-container {\n  width: 400px;\n  margin-left: 30%;\n  margin-top: 10%;\n}\n\n.add-file-type-form {\n}\n\n.add-file-type-data-form {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0px;\n  padding: 10px;\n  background-color: white;\n}\n\n.add-file-type-data-row {\n  width: 100%;\n  display: block;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n\n.add-file-type-button {\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.add-file-type-buttons {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.add-file-type-page-title {\n  color: #636363;\n  text-align: center;\n}\n\n.add-file-type-page-error {\n  color: #ff002b;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.add-file-type-text-container {\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/add-file-type/add-file-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-file-type-form-container\">\n  <div class=\"add-file-type-form\">\n    <form class=\"add-file-type-data-form mat-elevation-z2\" (ngSubmit)=\"tryCreateFileType()\" #createForm=\"ngForm\">\n      <div class=\"add-file-type-text-container\">\n        <h2 class=\"add-file-type-page-title\">Add new file type</h2>\n        <h3 class=\"add-file-type-page-error\" [hidden]=\"error.length == 0\">\n          {{error}}\n        </h3>\n      </div>\n      <mat-input-container class=\"add-file-type-data-row\">\n        <input matInput placeholder=\"Name of file type\" id=\"name\" required minlength=\"{{minFileTypeName}}\"\n               maxlength=\"{{maxFileTypeName}}\"\n               [(ngModel)]=\"fileTypeInfo.name\" name=\"name\"\n               #name=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"add-file-type-data-row\">\n        <input matInput placeholder=\"Mime-Type\" id=\"mimeType\" required minlength=\"{{minFileTypeMime}}\"\n               maxlength=\"{{maxFileTypeMime}}\"\n               [(ngModel)]=\"fileTypeInfo.mimeType\" name=\"mimeType\"\n               #mimeType=\"ngModel\">\n      </mat-input-container>\n      <mat-input-container class=\"add-file-type-data-row\">\n        <input matInput placeholder=\"Extension\" id=\"extension\" required minlength=\"{{minFileTypeExtension}}\"\n               maxlength=\"{{maxFileTypeExtension}}\"\n               [(ngModel)]=\"fileTypeInfo.extension\" name=\"extension\"\n               #extension=\"ngModel\">\n      </mat-input-container>\n      <div class=\"add-file-type-buttons\">\n        <button class=\"add-file-type-button\" type=\"submit\" mat-raised-button color=\"primary\"\n                [disabled]=\"!createForm.form.valid\"> Add file type\n        </button>\n        <button class=\"add-file-type-button\" type=\"submit\" mat-raised-button color=\"primary\"\n                (click)=\"redirectToFileTypesPage()\"> Cancel\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/add-file-type/add-file-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFileTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_component__ = __webpack_require__("../../../../../src/component/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_file_types_service__ = __webpack_require__("../../../../../src/service/file-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_entity_file_type_params_component__ = __webpack_require__("../../../../../src/model/entity/file-type-params.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_route_list__ = __webpack_require__("../../../../../src/util/route-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_file_type_data_source__ = __webpack_require__("../../../../../src/service/file-type-data-source.ts");
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







var AddFileTypeComponent = (function (_super) {
    __extends(AddFileTypeComponent, _super);
    function AddFileTypeComponent(fileTypesService, fileTypeDataSource, router) {
        var _this = _super.call(this) || this;
        _this.fileTypesService = fileTypesService;
        _this.fileTypeDataSource = fileTypeDataSource;
        _this.router = router;
        _this._fileTypeInfo = new __WEBPACK_IMPORTED_MODULE_4__model_entity_file_type_params_component__["a" /* FileTypeParams */]('', '', '');
        _this._error = '';
        return _this;
    }
    /**
     * Try to create new file type using the current fileTypesInfo.
     */
    AddFileTypeComponent.prototype.tryCreateFileType = function () {
        var _this = this;
        this.fileTypesService.createFileType(this._fileTypeInfo, function (message, result) {
            if (result) {
                var fileTypeInfo = _this.fileTypeInfo;
                fileTypeInfo.name = '';
                fileTypeInfo.mimeType = '';
                fileTypeInfo.extension = '';
                _this._error = '';
                _this.fileTypeDataSource.refresh();
                _this.redirectToFileTypesPage();
            }
            else {
                _this._error = message;
            }
        });
    };
    /**
     * The method to redirect to File Types Page
     */
    AddFileTypeComponent.prototype.redirectToFileTypesPage = function () {
        this.router.navigateByUrl(__WEBPACK_IMPORTED_MODULE_5__util_route_list__["a" /* RouteList */].PAGE_APP_SETTINGS + '/' + __WEBPACK_IMPORTED_MODULE_5__util_route_list__["a" /* RouteList */].PAGE_FILE_TYPES);
    };
    Object.defineProperty(AddFileTypeComponent.prototype, "fileTypeInfo", {
        /**
         * Gets the file type Info.
         *
         * @param {FileTypeEntity} value
         */
        get: function () {
            return this._fileTypeInfo;
        },
        /**
         * Sets the file type Info.
         *
         * @param {FileTypeEntity} value
         */
        set: function (value) {
            this._fileTypeInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFileTypeComponent.prototype, "error", {
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
    return AddFileTypeComponent;
}(__WEBPACK_IMPORTED_MODULE_0__page_component__["a" /* PageComponent */]));
AddFileTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-settings-add-file-type',
        template: __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/add-file-type/add-file-type.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/app-settings/page/file-types/add-file-type/add-file-type.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_file_types_service__["a" /* FileTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_file_types_service__["a" /* FileTypesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__service_file_type_data_source__["a" /* FileTypeDataSource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_file_type_data_source__["a" /* FileTypeDataSource */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AddFileTypeComponent);

var _a, _b, _c;
//# sourceMappingURL=add-file-type.component.js.map

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/file-types.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.material-icons.md-48 {\n  font-size: 48px;\n}\n\n.material-icons.blue {\n  color: #3f51b5;\n}\n\n.mat-icon-button{\n position: fixed;\n  right: 5%;\n  bottom: 5%;\n}\n\n.add-file-type-button-position {\n  position: absolute;\n  float: right;\n  z-index: 10;\n}\n\n.form-file-type {\n  position: relative;\n}\n\n.file-type-content {\n  position: absolute;\n  width: 81.5%;\n}\n\n.file-type-table {\n  background: inherit;\n  overflow-y: scroll;\n  max-height: 100vh;\n}\n\n.file-type-mat-header-cell {\n  font-family: inherit;\n  font-weight: bold;\n  font-size: inherit;\n}\n\n.file-type-mat-cell {\n  font-family: inherit;\n  font-weight: normal;\n  color: inherit;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/file-types.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"file-type-content\">\n  <mat-table class=\"file-type-table\" #table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell class=\"file-type-mat-header-cell\" *matHeaderCellDef> Name</mat-header-cell>\n      <mat-cell class=\"file-type-mat-cell\" *matCellDef=\"let element\"> {{element.name}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"mimeType\">\n      <mat-header-cell class=\"file-type-mat-header-cell\" *matHeaderCellDef> Mime-Type</mat-header-cell>\n      <mat-cell class=\"file-type-mat-cell\" *matCellDef=\"let element\"> {{element.mimeType}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"extension\">\n      <mat-header-cell class=\"file-type-mat-header-cell\" *matHeaderCellDef> Extension</mat-header-cell>\n      <mat-cell class=\"file-type-mat-cell\" *matCellDef=\"let element\"> {{element.extension}}</mat-cell>\n    </ng-container>\n\n    <mat-header-row class=\"file-type-mat-header-cell\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n\n<div class=\"add-file-type-button-position\">\n  <button mat-icon-button [routerLink]=\"['./add'] \">\n    <mat-icon><i class=\"material-icons md-48 blue\" aria-hidden=\"true\">add_circle</i></mat-icon>\n  </button>\n</div>\n\n<div class=\"form-file-type\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/component/page/app-settings/page/file-types/file-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_component__ = __webpack_require__("../../../../../src/component/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_file_type_data_source__ = __webpack_require__("../../../../../src/service/file-type-data-source.ts");
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
var FileTypesComponent = (function (_super) {
    __extends(FileTypesComponent, _super);
    function FileTypesComponent(fileTypeDataSource) {
        var _this = _super.call(this) || this;
        _this.fileTypeDataSource = fileTypeDataSource;
        _this.displayedColumns = ['name', 'mimeType', 'extension'];
        _this.dataSource = _this.fileTypeDataSource;
        return _this;
    }
    FileTypesComponent.prototype.ngOnInit = function () {
        this.fileTypeDataSource.refresh();
    };
    return FileTypesComponent;
}(__WEBPACK_IMPORTED_MODULE_1__page_component__["a" /* PageComponent */]));
FileTypesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-file-types',
        template: __webpack_require__("../../../../../src/component/page/app-settings/page/file-types/file-types.component.html"),
        styles: [__webpack_require__("../../../../../src/component/page/app-settings/page/file-types/file-types.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated,
        preserveWhitespaces: true,
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_file_type_data_source__["a" /* FileTypeDataSource */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_file_type_data_source__["a" /* FileTypeDataSource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_file_type_data_source__["a" /* FileTypeDataSource */]) === "function" && _a || Object])
], FileTypesComponent);

var _a;
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
     * Try to auth using the current fileTypesInfo.
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
     * Try to register using the current fileTypesInfo.
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
         * Gets the user fileTypesInfo.
         *
         * @returns {RegisterUserCredentials}
         */
        get: function () {
            return this._info;
        },
        /**
         * Sets the user fileTypesInfo.
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

/***/ "../../../../../src/model/category/asset-category-param.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetCategoryParam; });
/**
 * The asset category params.
 *
 * @author Denis Lesheniuk.
 */
var AssetCategoryParam = (function () {
    function AssetCategoryParam() {
    }
    return AssetCategoryParam;
}());

//# sourceMappingURL=asset-category-param.js.map

/***/ }),

/***/ "../../../../../src/model/category/category-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/**
 * The category component
 *
 * @author Denis Lesheniuk.
 */
var CategoryComponent = (function () {
    function CategoryComponent(name, id) {
        this._name = name;
        this._id = id;
    }
    Object.defineProperty(CategoryComponent.prototype, "name", {
        /**
         * Get the name of the component.
         *
         * @returns {string} the name of component.
         */
        get: function () {
            return this._name;
        },
        /**
         * Set the name of the component.
         *
         * @param {string} value the name of the component.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryComponent.prototype, "id", {
        /**
         * Get the id of the component.
         *
         * @returns {string} the id of component.
         */
        get: function () {
            return this._id;
        },
        /**
         * Set the id of the component.
         *
         * @param {string} value the id of the component.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return CategoryComponent;
}());

//# sourceMappingURL=category-component.js.map

/***/ }),

/***/ "../../../../../src/model/entity/file-type-params.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypeParams; });
/**
 * The information about file-types
 *
 * @author Alena Solonevich
 */
var FileTypeParams = (function () {
    function FileTypeParams(name, mimeType, extension) {
        this.name = name;
        this.mimeType = mimeType;
        this.extension = extension;
    }
    return FileTypeParams;
}());

//# sourceMappingURL=file-type-params.component.js.map

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

/***/ "../../../../../src/service/asset-category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetCategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utils__ = __webpack_require__("../../../../../src/util/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__security_service__ = __webpack_require__("../../../../../src/service/security.service.ts");
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
 * The asset category service.
 *
 * @author Denis Lesheniuk.
 */
var AssetCategoryService = AssetCategoryService_1 = (function () {
    function AssetCategoryService(http, securityService) {
        this.http = http;
        this.securityService = securityService;
    }
    /**
     * The function to get all categories from server.
     *
     * @returns {Promise<AssetCategoryEntity[]>} the all categories.
     */
    AssetCategoryService.prototype.getCategories = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]() });
        this.securityService.addAccessToken(options);
        return this.http.get(AssetCategoryService_1.API_ASSETS_CATEGORIES, options)
            .toPromise()
            .then(function (response) {
            var body = response.json();
            return body;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleError(error); });
    };
    /**
     * The function to put the category to the server.
     *
     * @param {AssetCategoryParam} params the asset category param.
     * @param {(message: string, result: boolean) => void} handler the handler result of putting.
     */
    AssetCategoryService.prototype.addCategory = function (params, handler) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]() });
        this.securityService.addAccessToken(options);
        this.http.put(AssetCategoryService_1.API_ASSETS_CATEGORIES + "/put", params, options)
            .toPromise()
            .then(function (response) { return handler(null, true); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleErrorMessageJson(error, function (ex) { return handler(ex, false); }); });
    };
    /**
     * The function to remove the category from server.
     *
     * @param {string} id the category id.
     * @param {(message: string, result: boolean) => void} handler the handler result of removing.
     */
    AssetCategoryService.prototype.removeCategory = function (id, handler) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]() });
        this.securityService.addAccessToken(options);
        this.http.delete(AssetCategoryService_1.API_ASSETS_CATEGORIES + '/' + id, options)
            .toPromise()
            .then(function (response) { return handler(null, true); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleErrorMessageJson(error, function (ex) { return handler(ex, false); }); });
    };
    /**
     * Get children.
     *
     * @param {string} id the parent id.
     * @returns {Promise<AssetCategoryEntity[]>} result of getting children.
     */
    AssetCategoryService.prototype.getChildren = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]() });
        this.securityService.addAccessToken(options);
        return this.http.get(AssetCategoryService_1.API_ASSETS_CATEGORIES + "/" + id, options)
            .toPromise()
            .then(function (response) {
            var body = response.json();
            return body;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleError(error); });
    };
    return AssetCategoryService;
}());
/**
 * The url to categories controller.
 *
 * @type {string}
 */
AssetCategoryService.API_ASSETS_CATEGORIES = "api/asset-categories";
AssetCategoryService = AssetCategoryService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__security_service__["a" /* SecurityService */]) === "function" && _b || Object])
], AssetCategoryService);

var AssetCategoryService_1, _a, _b;
//# sourceMappingURL=asset-category.service.js.map

/***/ }),

/***/ "../../../../../src/service/file-type-data-source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypeDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_types_service__ = __webpack_require__("../../../../../src/service/file-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
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




var FileTypeDataSource = (function (_super) {
    __extends(FileTypeDataSource, _super);
    function FileTypeDataSource(fileTypesService) {
        var _this = _super.call(this) || this;
        _this.fileTypesService = fileTypesService;
        var emptyArray = [];
        _this.fileTypes = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](emptyArray);
        return _this;
    }
    FileTypeDataSource.prototype.ngOnInit = function () {
    };
    FileTypeDataSource.prototype.refresh = function () {
        var _this = this;
        this.fileTypesService.loadFileTypes().then(function (value) {
            _this.fileTypes.next(value);
        });
    };
    FileTypeDataSource.prototype.connect = function () {
        return this.fileTypes;
    };
    FileTypeDataSource.prototype.disconnect = function () {
    };
    return FileTypeDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));
FileTypeDataSource = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__file_types_service__["a" /* FileTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__file_types_service__["a" /* FileTypesService */]) === "function" && _a || Object])
], FileTypeDataSource);

var _a;
//# sourceMappingURL=file-type-data-source.js.map

/***/ }),

/***/ "../../../../../src/service/file-types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utils__ = __webpack_require__("../../../../../src/util/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__security_service__ = __webpack_require__("../../../../../src/service/security.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileTypesService = FileTypesService_1 = (function () {
    function FileTypesService(http, security) {
        this.http = http;
        this.security = security;
    }
    FileTypesService.prototype.createFileType = function (fileTypeParams, handler) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.security.addAccessToken(options);
        this.http.post(FileTypesService_1.ADD_FILE_TYPE_URL, fileTypeParams)
            .toPromise()
            .then(function (response) { return handler(null, true); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].handleErrorMessageJson(error, function (ex) { return handler(ex, false); }); });
    };
    FileTypesService.prototype.loadFileTypes = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.security.addAccessToken(options);
        return this.http.get(FileTypesService_1.LOAD_FILE_TYPE_URL)
            .toPromise()
            .then(function (response) {
            var body = response.json();
            return body;
        })
            .catch(this.hadlerError);
    };
    FileTypesService.prototype.hadlerError = function (error) {
        return Promise.reject(error.message || error);
    };
    return FileTypesService;
}());
FileTypesService.ADD_FILE_TYPE_URL = '/api/file-types/add';
FileTypesService.LOAD_FILE_TYPE_URL = '/api/file-types/get/all';
FileTypesService = FileTypesService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__security_service__["a" /* SecurityService */]) === "function" && _b || Object])
], FileTypesService);

var FileTypesService_1, _a, _b;
//# sourceMappingURL=file-types.service.js.map

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
        if (accessToken == null) {
            return;
        }
        if (requestOptions.headers == null) {
            requestOptions.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        }
        requestOptions.headers.append(SecurityService_1.ACCESS_TOKEN_HEADER, accessToken);
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
SecurityService.AUTH_URL = '/api/users/authorization';
/**
 * The url of register endpoint.
 *
 * @type {string}
 */
SecurityService.REGISTER_URL = '/api/users/register';
/**
 * The name of access token header.
 *
 * @type {string}
 */
SecurityService.ACCESS_TOKEN_HEADER = 'X-Access-Token';
SecurityService = SecurityService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
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
RouteList.PAGE_ADD_FILE_TYPE = "add";
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Response */]) {
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Response */]) {
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
    /**
     * The method to handle an error from http request.
     *
     * @param {Response | any} error the error.
     * @returns {Promise<never>} the error msg.
     */
    Utils.handleError = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
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