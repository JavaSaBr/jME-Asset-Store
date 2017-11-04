/**
 * The information about file-types
 *
 * @author Alena Solonevich
 */

export class FileTypes {
  /**
   * The name of the file type
   */

  private _name: string;

  /**
   * The MIME type of the file type
   */
  private _mimeType: string;
  /**
   * The file type extension
   */
  private _extension: string;
  /**
   * The ID of file type
   */

  constructor(name: string, mimeType: string, extension: string,) {
    this._name = name;
    this._mimeType = mimeType;
    this._extension = extension
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
