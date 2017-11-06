/**
 * The asset category entity.
 *
 * @author Denis Lesheniuk.
 */
export class AssetCategoryEntity {

  /**
   * The id of asset category
   */
  private _id: number;

  /**
   * The name of asset category
   */
  private _name: string;

  /**
   * The description of asset category
   */
  private _description: string;

  /**
   * The parent of asset category
   */
  private _parent: AssetCategoryEntity;

  /**
   * The children of asset category
   */
  private _children: AssetCategoryEntity[];

  constructor() {
  }

  /**
   * Get the asset component id.
   *
   * @returns {number} the asset component id.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Set the asset component id.
   *
   * @param {number} value the asset component id.
   */
  set id(value: number) {
    this._id = value;
  }

  /**
   * Get the asset category name;
   *
   * @returns {string} the asset category name.
   */
  get name(): string {
    return this._name;
  }

  /**
   * Set the asset category name.
   *
   * @param {string} value the casset category name.
   */
  set name(value: string) {
    this._name = value;
  }

  /**
   * Get the asset category description.
   *
   * @returns {string} the asset category description.
   */
  get description(): string {
    return this._description;
  }

  /**
   * Set the asset category description.
   *
   * @param {string} value the asset category description.
   */
  set description(value: string) {
    this._description = value;
  }

  /**
   * Get the asset category parent.
   *
   * @returns {AssetCategoryEntity} the asset category parent.
   */
  get parent(): AssetCategoryEntity {
    return this._parent;
  }

  /**
   * Set the asset category parent.
   *
   * @param {AssetCategoryEntity} value
   */
  set parent(value: AssetCategoryEntity) {
    this._parent = value;
  }

  /**
   * Get the asset category children.
   *
   * @returns {AssetCategoryEntity[]} the asset category children.
   */
  get children(): AssetCategoryEntity[] {
    return this._children;
  }

  /**
   * Set the asset category children.
   *
   * @param {AssetCategoryEntity[]} value the asset category children.
   */
  set children(value: AssetCategoryEntity[]) {
    this._children = value;
  }
}
