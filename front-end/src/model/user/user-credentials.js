"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.UserCredentials = UserCredentials;
