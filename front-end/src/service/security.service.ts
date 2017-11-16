import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {UserCredentials} from '../model/user/user-credentials';
import {Utils} from '../util/utils';
import {User} from '../model/user/user';
import {RegisterUserCredentials} from '../model/user/register-user-credentials';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SecurityService {

  public static readonly ROLE_USER = 'USER';
  public static readonly ROLE_ARTIST = 'ARTIST';

  /**
   * The url of auth endpoint.
   *
   * @type {string}
   */
  private static readonly AUTH_URL = '/api/users/authorization';

  /**
   * The url of register endpoint.
   *
   * @type {string}
   */
  private static readonly REGISTER_URL = '/api/users/register';

  /**
   * The name of access token header.
   *
   * @type {string}
   */
  private static readonly ACCESS_TOKEN_HEADER = 'X-Access-Token';

  /**
   * The current user.
   */
  private _user: User;

  /**
   * The property to listen the auth flag.
   */
  private readonly _authProperty: BehaviorSubject<boolean>;

  constructor(private readonly http: Http) {
    this._authProperty = new BehaviorSubject(false);
  }

  /**
   * The function to auth a user in the system.
   *
   * @param credentials the credentials.
   * @param handler to handle result of authentication.
   */
  public auth(credentials: UserCredentials, handler: (message: string, result: boolean) => void): void {
    const username = credentials.login;
    this.http.post(SecurityService.AUTH_URL, credentials)
      .toPromise()
      .then(response => {
        const body = response.json();
        this._user = new User(username, body.token, body.roles);
        this._authProperty.next(true);
        handler(null, true);
      })
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  /**
   * The function to register a user in the system.
   *
   * @param credentials the credentials.
   * @param handler to handle result of registration.
   */
  public register(credentials: RegisterUserCredentials, handler: (message: string, result: boolean) => void): void {
    this.http.post(SecurityService.REGISTER_URL, credentials)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  /**
   * Add an access token to header of the request options.
   *
   * @param requestOptions the request options.
   * @return the updated request options.
   */
  public addAccessToken(requestOptions: RequestOptions): void {

    if (options == null) {
      options = new RequestOptions();
    }

    const accessToken = this.accessToken;
    if (accessToken == null) {
      return;
    }

    if (requestOptions.headers == null) {
      requestOptions.headers = new Headers();
    }

    requestOptions.headers.append(SecurityService.ACCESS_TOKEN_HEADER, accessToken);
  }

  /**
   * The function to logout from the system.
   */
  logout() {
    this._user = null;
    this._authProperty.next(false);
  }

  /**
   * Get the auth property.
   *
   * @returns {Observable<boolean>} the auth property.
   */
  get authProperty() {
    return this._authProperty;
  }

  /**
   * Get the current user.
   *
   * @returns {User} the current user.
   */
  get user(): User {
    return this._user;
  }

  /**
   * Get the current access token.
   *
   * @returns {string} the current access token.
   */
  get accessToken(): string {

    const currentUser = this.user;

    if (currentUser == null) {
      return null;
    }

    return currentUser.accessToken;
  }

  /**
   * Check the role in the current user.
   *
   * @param {string} toCheck the role to check.
   * @returns {boolean} true if the current user has the role.
   */
  hasRole(toCheck: string): boolean {

    const currentUser = this.user;

    if (currentUser == null) {
      return false;
    }

    const roles = currentUser.roles;

    for (const role of roles) {
      if (role === toCheck) {
        return true;
      }
    }

    return false;
  }
}
