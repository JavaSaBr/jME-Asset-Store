export class UserEntity{

  private _login: string;

  private _first_name: string;

  private _last_name: string;

  private _middle_name: string;

  private _mail: string;

  private _password: string;

  private _roles: string[];

  constructor(login: string, first_name: string, last_name: string, middle_name: string, mail: string, password: string, roles: string[]) {
    this._login = login;
    this._first_name = first_name;
    this._last_name = last_name;
    this._middle_name = middle_name;
    this._mail = mail;
    this._password = password;
    this._roles = roles;
  }


  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get middle_name(): string {
    return this._middle_name;
  }

  set middle_name(value: string) {
    this._middle_name = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get roles(): string[] {
    return this._roles;
  }

  set roles(value: string[]) {
    this._roles = value;
  }
}
