"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../util/utils");
var user_1 = require("../model/user/user");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/toPromise");
var SecurityService = SecurityService_1 = (function () {
    function SecurityService(http) {
        this.http = http;
        this._authProperty = new BehaviorSubject_1.BehaviorSubject(false);
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
            _this._user = new user_1.User(username, body.token, body.roles);
            _this._authProperty.next(true);
            handler(null, true);
        })
            .catch(function (error) { return utils_1.Utils.handleErrorMessage(error, function (ex) { return handler(ex, false); }); });
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
            .catch(function (error) { return utils_1.Utils.handleErrorMessage(error, function (ex) { return handler(ex, false); }); });
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
    core_1.Injectable()
], SecurityService);
exports.SecurityService = SecurityService;
var SecurityService_1;
