/**
 * The category component
 *
 * @author Denis Lesheniuk.
 */
export class CategoryComponent {

  /**
   * The name of component.
   */
  private _name: string;

  /**
   * The id of component.
   */
  private _id: string;


  constructor() {
  }

  /**
   * Get the name of the component.
   *
   * @returns {string} the name of component.
   */
  get name(): string {
    return this._name;
  }

  /**
   * Set the name of the component.
   *
   * @param {string} value the name of the component.
   */
  set name(value: string) {
    this._name = value;
  }

  /**
   * Get the id of the component.
   *
   * @returns {string} the id of component.
   */
  get id(): string {
    return this._id;
  }

  /**
   * Set the id of the component.
   *
   * @param {string} value the id of the component.
   */
  set id(value: string) {
    this._id = value;
  }
}
