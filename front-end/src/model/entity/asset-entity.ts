import {UserEntity} from "./user-entity";
import {FileEntity} from "./file-entity";

export class AssetEntity{

  private _id: number;

  private _name: string;

  private _description: string;

  private _creator: UserEntity;

  private _files: FileEntity[];

  constructor(id: number, name: string, description: string, creator: UserEntity, files: FileEntity[]) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._creator = creator;
    this._files = files;
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

  get id() {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get files(): FileEntity[] {
    return this._files;
  }

  set files(value: FileEntity[]) {
    this._files = value;
  }
}
