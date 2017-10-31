/**
 * The information to auth in the system.
 *
 * @author Alex Brui
 */
export class UserCredentials {

  /**
   * The user name.
   */
  login: string;

  /**
   * The user password.
   */
  password: string;

  constructor(username: string, password: string) {
    this.password = password;
    this.login = username;
  }
}
