import {Component} from '@angular/core';
import {PageComponent} from '../../page.component';
import {SecurityService} from '../../../service/security.service';
import {Router} from '@angular/router';
import {RegisterUserCredentials} from "../../../model/user/register-user-credentials";

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
  private userRole: string = "Simple user";

  /**
   * The author role field.
   */
  private authorRole: string = "Author";

  /**
   * The user roles.
   */
  private roles: string [];

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
    this.roles = ["USER"];
    this._info = new RegisterUserCredentials('', '', '', '', '', '', this.roles, '');
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
   * Adds author role to the user's list of roles.
   */
  addAuthorRole(){
    if(!this.roles.includes("AUTHOR"))
      this.roles.push("AUTHOR");
  }

  /**
   * Remove author role from user's list of roles.
   */
  removeAuthorRole(){
    if(this.roles.includes("AUTHOR")){
     var index = this.roles.indexOf("AUTHOR");
       this.roles.splice(index, 1);
    }
  }
}

