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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<mat-sidenav-container>\r\n  <div class=\"tool-bar\">\r\n    <mat-tab-group>\r\n      <mat-tab label=\"Mathematical Operations\"><app-math></app-math></mat-tab>\r\n      <mat-tab label=\"User Operations\"><app-user></app-user></mat-tab>\r\n     <mat-tab label=\"File Operations\"><app-file></app-file></mat-tab>\r\n      <mat-tab label=\"Examples\"><app-example></app-example></mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_math_math_component__ = __webpack_require__("../../../../../src/app/components/math/math.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_file_file_component__ = __webpack_require__("../../../../../src/app/components/file/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_example_example_component__ = __webpack_require__("../../../../../src/app/components/example/example.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_file_file_component__["a" /* FileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_math_math_component__["a" /* MathComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_example_example_component__["a" /* ExampleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCheckboxModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/example/example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: block;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: column-reverse;\r\n          flex-direction: column-reverse;\r\n  max-height: 600px;\r\n  min-width: 600px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: inherit;\r\n  max-height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/example/example.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Example Components</h1>\r\n\r\n\r\n  <mat-form-field floatPlaceholder=\"auto\">\r\n  <mat-select placeholder=\"Math operations\" [formControl]=\"mathOperations\" multiple>\r\n    <mat-select-trigger>\r\n      {{mathOperations.value ? mathOperations.value[0] : ''}}\r\n      <span *ngIf=\"mathOperations.value?.length > 1\" class=\"example-additional-selection\">\r\n        (+{{mathOperations.value.length - 1}} others)\r\n      </span>\r\n    </mat-select-trigger>\r\n      <mat-option>None</mat-option>\r\n    <mat-option *ngFor=\"let mathoperation of mathOperationsList\" [value]=\"mathoperation\">{{mathoperation}}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<form class=\"example-form\" *ngIf=\"condition\">\r\n  <mat-card>\r\n    <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n      <mat-grid-tile>\r\n        <label>First Variable</label>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <input type=\"text\" [value]=\"firstVariable\">\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <label>Second Variable</label>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <input type=\"text\" [value]=\"secondVariable\" >\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </mat-card>\r\n  <button mat-icon-button>Get result!</button>\r\n\r\n\r\n\r\n<mat-form-field>\r\n  <mat-select placeholder=\"Math operations\" [(ngModel)]=\"selectedValue\" name=\"mathoperation1\">\r\n        <mat-option>None</mat-option>\r\n    <mat-option *ngFor=\"let mathoperation1 of mathoperationss\" [value]=\"mathoperation1.value\">\r\n      {{mathoperation1.viewValue}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n  <p> Selected value: {{selectedValue}} </p>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/example/example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExampleComponent = (function () {
    function ExampleComponent() {
        this.mathOperations = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.mathOperationsList = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Pow'];
    }
    return ExampleComponent;
}());
ExampleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-example',
        styles: [__webpack_require__("../../../../../src/app/components/example/example.component.css")],
        template: __webpack_require__("../../../../../src/app/components/example/example.component.html"),
    })
], ExampleComponent);

//# sourceMappingURL=example.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/file/file.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>File Components</h1>\r\n<button mat-button [matMenuTriggerFor]=\"menu\">Select an operation</button>\r\n\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item (click)=\"toggle()\">Upload File</button>\r\n  <button mat-menu-item (click)=\"toggle()\">Download Random</button>\r\n</mat-menu>\r\n<mat-card *ngIf=\"condition\">\r\n  <input type=\"file\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx, .txt\">\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/file/file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileComponent = (function () {
    function FileComponent() {
        this.condition = true;
    }
    FileComponent.prototype.toggle = function () {
        this.condition = !this.condition;
    };
    return FileComponent;
}());
FileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-file',
        template: __webpack_require__("../../../../../src/app/components/file/file.component.html"),
    })
], FileComponent);

//# sourceMappingURL=file.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/math/math.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".math-selection {\r\n  opacity: 0.75;\r\n  font-size: 0.75em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/math/math.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Math Components</h1>\r\n\r\n<button mat-button [matMenuTriggerFor]=\"menu\">Select an operation</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item (click)=\"toggle()\">Addition</button>\r\n  <button mat-menu-item (click)=\"toggle()\">Subtraction</button>\r\n  <button mat-menu-item (click)=\"toggle()\">Multiplication</button>\r\n  <button mat-menu-item (click)=\"toggle()\">Division</button>\r\n  <button mat-menu-item (click)=\"toggle()\">Pow</button>\r\n</mat-menu>\r\n\r\n<form class=\"math-form\" *ngIf=\"condition\">\r\n  <mat-card>\r\n    <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n      <mat-grid-tile>\r\n        <label>First Number</label>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <input type=\"text\" [value]=\"firstNumber\">\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <label>Second Number</label>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <input type=\"text\" [value]=\"secondNumber\" >\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </mat-card>\r\n\r\n  <button mat-icon-button>Result</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/math/math.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Select with custom trigger text */
var MathComponent = (function () {
    function MathComponent() {
        this.condition = false;
    }
    MathComponent.prototype.toggle = function () {
        this.condition = !this.condition;
    };
    return MathComponent;
}());
MathComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-math',
        template: __webpack_require__("../../../../../src/app/components/math/math.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/math/math.component.css")],
    })
], MathComponent);

//# sourceMappingURL=math.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>User Components</h1>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"role\">\r\n      <mat-header-cell *matHeaderCellDef> Role </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.role}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ExampleDataSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
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




var data = [
    { position: 1, name: 'Denis', role: "Admin" },
    { position: 1, name: 'Alex', role: "User" },
];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(data);
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

/**
 * @title Basic table
 */
var UserComponent = (function () {
    function UserComponent() {
        this.displayedColumns = ['position', 'name', 'role'];
        this.dataSource = new ExampleDataSource();
    }
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user',
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")],
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        providers: [ExampleDataSource]
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map