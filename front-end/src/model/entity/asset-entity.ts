import {UserEntity} from "./user-entity";

export class AssetEntity{
  private _name: string;

  private _description: string;

  private _creator: UserEntity;


  constructor(name: string, description: string, creator: UserEntity) {
    this._name = name;
    this._description = description;
    this._creator = creator;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get creator(): UserEntity {
    return this._creator;
  }

  set creator(value: UserEntity) {
    this._creator = value;
  }
}
