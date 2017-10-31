import {UserCredentials} from './user-credentials';

/**
 * The information to register a new user.
 *
 * @author Alex Brui
 */
export class RegisterUserCredentials extends UserCredentials {

  /**
   * The user first name.
   */
  firstName: string;

  /**
   * The user last name.
   */
  lastName: string;

  /**
   * The user middle name.
   */
  middleName: string;

  /**
   * The user mail.
   */
  mail: string;

  /**
   * The user roles.
   */
  roles: string[];

  /**
   * The user confirm password.
   */
  confirmPassword: string;

  constructor(login: string, password: string, userName: string, lastName: string, middleName: string, mail: string, roles: string[], confirmPassword: string) {
    super(login, password);
    this.firstName = userName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.mail = mail;
    this.roles = roles;
    this.confirmPassword = confirmPassword;
  }
}
