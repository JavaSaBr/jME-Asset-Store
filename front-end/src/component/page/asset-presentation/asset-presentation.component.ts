import {Component} from "@angular/core";
import {PageComponent} from "../../page.component";
import {AssetService} from "../../../service/asset/asset.service";
import {ActivatedRoute, Params} from "@angular/router";
import {AssetEntity} from "../../../model/entity/asset-entity";
import {saveAs} from 'file-saver/FileSaver'

@Component({
  moduleId: module.id,
  selector: 'app-asset-asset',
  templateUrl: './asset-presentation.component.html',
  providers: [],
  styleUrls: ['./asset-presentation.component.css']
})

export class AssetPresentationComponent extends PageComponent {

  private _name: string;

  asset: AssetEntity;

  private _error: string;

  constructor(private route: ActivatedRoute, private assetService: AssetService) {
    super();
    this.route.params.subscribe((params: Params) => this.loadAsset(params['id']));
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }


  get error(): string {
    return this._error;
  }

  set error(value: string) {
    this._error = value;
  }

  loadAsset(id: number): void {
    this.assetService.loadAsset(id, (message, result) => {
      if (result != null) {
        this.asset = result;
        this.name = result.name;
      } else {
        this.error = message;
      }
    })
  }

  downloadAsset() {
    this.assetService.downloadAsset(this.asset.id, (message, blob) => {
      if (message == null) {
        saveAs(blob, this.asset.name)
      }
      else {
        this.error = message;
      }
    })
  }
}
