import {Component} from '@angular/core';
import {PageComponent} from '../../page.component';
import {SecurityService} from '../../../service/security.service';
import {Router} from '@angular/router';
import {RegisterUserCredentials} from "../../../model/user/register-user-credentials";
import {UserRoles} from "../../../util/user-roles";

/**
 * The components provides sets of methods for user registration.
 *
 * @author Alex Brui
 */
@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends PageComponent{

  /**
   * The user role field.
   */
  private _userRole: string = "Simple user";

  /**
   * The author role field.
   */
  private _authorRole: string = "Author";

  /**
   * The user _roles.
   */
  private _roles: string [];

  /**
   * The current register user info.
   */
  private _info: RegisterUserCredentials;

  /**
   * The error message.
   */
  private _error: string;

  constructor(private readonly security: SecurityService,
              private readonly router: Router) {
    super();
    this._roles = [UserRoles.USER_ROLE];
    this._info = new RegisterUserCredentials('', '', '', '', '', '', this._roles, '');
    this._error = '';
  }

  /**
   * Try to register using the current info.
   */
  tryRegister() {
    this.security.register(this._info, (message, result) => {
      if (result) {
        this._error = '';
        this._info.login = '';
        this._info.password = '';
        this._info.firstName = '';
        this._info.lastName = '';
        this._info.middleName = '';
        this._info.mail = '';
        this._info.confirmPassword = '';
        this.router.navigateByUrl('/login');
      } else {
        this._error = message;
      }
    });
  }

  /**
   * Gets the user info.
   *
   * @returns {RegisterUserCredentials}
   */
  get info(): RegisterUserCredentials {
    return this._info;
  }

  /**
   * Sets the user info.
   *
   * @param {RegisterUserCredentials} value
   */
  set info(value: RegisterUserCredentials) {
    this._info = value;
  }

  /**
   * Gets the error.
   *
   * @returns {string}
   */
  get error(): string{
    return this._error;
  }

  /**
   * Sets the error.
   *
   * @param {string} value
   */
  set error(value: string) {
    this._error = value;
  }

  /**
   * Adds author role to the user's list of _roles.
   */
  addAuthorRole(){
    if(!this._roles.includes(UserRoles.AUTHOR_ROLE))
      this._roles.push(UserRoles.AUTHOR_ROLE);
  }

  /**
   * Remove author role from user's list of _roles.
   */
  removeAuthorRole(){
    if(this._roles.includes(UserRoles.AUTHOR_ROLE)){
     var index = this._roles.indexOf(UserRoles.AUTHOR_ROLE);
       this._roles.splice(index, 1);
    }
  }
}

