import {Component} from '@angular/core';
import {PageComponent} from '../../page.component';
import {SecurityService} from '../../../service/security.service';
import {Router} from '@angular/router';
import {RegisterUserCredentials} from "../../../model/user/register-user-credentials";

/**
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
    this._info = new RegisterUserCredentials('', '', '');
    this._error = '';
  }

  /**
   * Try to register using the current info.
   */
  tryRegister() {
    this.security.register(this._info, (message, result) => {
      if (result) {
        this._error = '';
        this._info.username = '';
        this._info.password = '';
        this._info.confirmPassword = '';
        this.router.navigateByUrl('/login');

      } else {
        this._error = message;
      }
    });
  }

  get info(): RegisterUserCredentials {
    return this._info;
  }

  set info(value: RegisterUserCredentials) {
    this._info = value;
  }

  get error(): string {
    return this._error;
  }

  set error(value: string) {
    this._error = value;
  }
}

