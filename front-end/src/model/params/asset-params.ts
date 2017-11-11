export class AssetParams {
  name: string;
  description: string;
  id: number;

  constructor(name: string, description: string, id: number) {
    this.name = name;
    this.description = description;
    this.id = id;
  }
}
