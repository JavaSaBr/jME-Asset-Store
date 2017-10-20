"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.User = User;
