import {Injectable} from "@angular/core";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {AssetEntity} from "../../model/entity/asset-entity";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AssetService} from "./asset.service";

@Injectable()
export class  AssetDataSource extends DataSource<AssetEntity>{

  private assets: BehaviorSubject<AssetEntity[]>;

  constructor(private readonly assetService: AssetService) {
    super();
    let emptyArray: AssetEntity[] = [];
    this.assets = new BehaviorSubject(emptyArray);
  }

    public refresh(): void {
      this.assetService.loadAssets((message, assets) => {
        if (message == null) {
          this.assets.next(assets)
        }
      })
    }

  connect(): Observable<AssetEntity[]> {
        return this.assets;
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
