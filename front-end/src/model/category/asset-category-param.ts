/**
 * The asset category params.
 *
 * @author Denis Lesheniuk.
 */
export class AssetCategoryParam {

  /**
   * The id of asset category
   */
  private _id: string;
  /**
   * The name of asset category
   */
  private _name: string;

  /**
   * The description of asset category
   */
  private _description: string;


  constructor(id: string, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
  }
}
