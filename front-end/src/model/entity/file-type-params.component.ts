/**
 * The information about file-types
 *
 * @author Alena Solonevich
 */

export class FileTypeParams {

  /**
   * The name of the file type
   */
  name: string;

  /**
   * The MIME type of the file type
   */
  mimeType: string;
  /**
   * The file type extension
   */
  extension: string;

  /**
   * The ID of file type
   */

  constructor(name: string, mimeType: string, extension: string,) {
    this.name = name;
    this.mimeType = mimeType;
    this.extension = extension
  }
}

