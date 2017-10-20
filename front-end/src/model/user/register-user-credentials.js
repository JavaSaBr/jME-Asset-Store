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
Object.defineProperty(exports, "__esModule", { value: true });
var user_credentials_1 = require("./user-credentials");
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
}(user_credentials_1.UserCredentials));
exports.RegisterUserCredentials = RegisterUserCredentials;
