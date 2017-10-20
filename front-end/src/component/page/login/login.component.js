"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_credentials_1 = require("../../../model/user/user-credentials");
var page_component_1 = require("../../page.component");
/**
 * @author Alex Brui
 */
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(security, router) {
        var _this = _super.call(this) || this;
        _this.security = security;
        _this.router = router;
        _this.credentials = new user_credentials_1.UserCredentials('', '');
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
}(page_component_1.PageComponent));
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
