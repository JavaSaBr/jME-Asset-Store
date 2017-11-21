export class FileEntity {

  private _id: number;
  private _content: Blob;
  private _name: string;
  private _creator_id: number;
  private _type_id: number;

  constructor(id: number, content: Blob, name: string, creator_id: number, type_id: number) {
    this._id = id;
    this._content = content;
    this._name = name;
    this._creator_id = creator_id;
    this._type_id = type_id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get content(): Blob {
    return this._content;
  }

  set content(value: Blob) {
    this._content = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get creator_id(): number {
    return this._creator_id;
  }

  set creator_id(value: number) {
    this._creator_id = value;
  }

  get type_id(): number {
    return this._type_id;
  }

  set type_id(value: number) {
    this._type_id = value;
  }
}
