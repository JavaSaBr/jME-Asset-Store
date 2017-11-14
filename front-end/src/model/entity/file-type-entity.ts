/**
 * The information about file-types
 *
 * @author Alena Solonevich
 */

export class FileTypeEntity {

  /**
   * The id of the file type
   */
  _id: number;

  /**
   * The name of the file type
   */
  _name: string;

  /**
   * The MIME type of the file type
   */
  _mimeType: string;

  /**
   * The file type extension
   */
  _extension: string;

  constructor(id: number, name: string, mimeType: string, extension: string,) {
    this._id = id;
    this._name = name;
    this._mimeType = mimeType;
    this._extension = extension
  }

  /**
   * Get the id of file type
   */
  get id(): number {
    return this._id;
  }

  /**
   * Get the name of file type
   *
   * @returns {string} the name of file type
   */
  get name(): string {
    return this._name
  }

  /**
   * Get the mime-type of file type
   *
   * @returns {string} the mime-type
   */
  get mimeType(): string {
    return this._mimeType
  }

  /**
   * Get the extension of file type
   *
   * @returns {string} the extension of file type
   */
  get extension(): string {
    return this._extension
  }
}
