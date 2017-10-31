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
export class RegisterComponent extends PageComponent {

  /**
   * The selected by user role.
   */
  private _selectedRole: string;

  /**
   * List of available roles
   */
  private _availableRoles = [
    {value: SecurityService.ROLE_USER, viewValue: 'User'},
    {value: SecurityService.ROLE_ARTIST, viewValue: 'Artist'}
  ];

  /**
   * The user _roles.
   */
  private _roles: string[];

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
    this._info = new RegisterUserCredentials('', '', '', '', '', '', this._roles, '');
    this._error = '';
    this._info.roles = [];
  }

  /**
   * Try to register using the current info.
   */
  tryRegister() {
    this.setRoleList();
    this.security.register(this._info, (message, result) => {
      if (result) {
        let info = this.info;
        info.login = '';
        info.password = '';
        info.firstName = '';
        info.lastName = '';
        info.middleName = '';
        info.mail = '';
        info.confirmPassword = '';
        this.router.navigateByUrl('/login');
        this._error = '';
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
  get error(): string {
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
   * Gets the selected by user role.
   *
   * @returns {string}
   */
  get selectedRole(): string {
    return this._selectedRole;
  }

  /**
   * Sets the selected by user role.
   *
   * @param {string} value
   */
  set selectedRole(value: string) {
    this._selectedRole = value;
  }

  /**
   * Gets the list of the available roles.
   *
   * @returns {{value: string; viewValue: string}[]}
   */
  get availableRoles(): ({ value: string; viewValue: string } | { value: string; viewValue: string })[] {
    return this._availableRoles;
  }

  /**
   * Sets the list of the available roles.
   *
   * @param {{value: string; viewValue: string}[]} value
   */
  set availableRoles(value: ({ value: string; viewValue: string } | { value: string; viewValue: string })[]) {
    this._availableRoles = value;
  }

  /**
   * Gets the list of user roles.
   *
   * @returns {string[]}
   */
  get roles(): string[] {
    return this._roles;
  }

  /**
   * Set the list of user roles.
   *
   * @param {string[]} value
   */
  set roles(value: string[]) {
    this._roles = value;
  }

  /**
   * Based on the user's choice, the method fills the list of user's roles.
   */
  private setRoleList() {
    switch (this._selectedRole) {
      case SecurityService.ROLE_USER: {
        this._info.roles.push(SecurityService.ROLE_USER);
        break;
      }
      case SecurityService.ROLE_ARTIST: {
        this._info.roles.push(SecurityService.ROLE_USER, SecurityService.ROLE_ARTIST);
        break;
      }
      default: {
        this._info.roles.push(SecurityService.ROLE_USER);
        break;
      }
    }
  }
}

