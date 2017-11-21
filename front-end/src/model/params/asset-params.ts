export class AssetParams {

  name: string;
  description: string;
  id: number;
  category_id: number;

  constructor(name: string, description: string, id: number, category_id: number) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.category_id = category_id;
  }
}
