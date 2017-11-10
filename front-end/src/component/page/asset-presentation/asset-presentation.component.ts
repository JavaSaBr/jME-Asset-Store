import {Component} from "@angular/core";
import {PageComponent} from "../../page.component";
import {AssetService} from "../../../service/asset/asset.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AssetEntity} from "../../../model/entity/asset-entity";
import {Subscription} from "rxjs/Subscription";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

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

  constructor(private route: ActivatedRoute, private assetService: AssetService, private router: Router) {
    super();
    this.route.queryParams.subscribe((params: Params) => {
        let id = params['id'];
        this.loadAsset(id);
      }
    )
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  loadAsset(id: number): void {
    this.assetService.loadAsset(id, (message, result) => {
      if (result != null) {
        this.asset = result;
        this.name = result.name;
      } else {
        //TODO
      }
    })
  }
}
