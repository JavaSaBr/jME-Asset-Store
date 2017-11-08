import {Component} from "@angular/core";
import {PageComponent} from "../../page.component";
import {AssetService} from "../../../service/asset/asset.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AssetEntity} from "../../../model/entity/asset-entity";
import {Subscription} from "rxjs/Subscription";

@Component({
  moduleId: module.id,
  selector: 'app-asset-asset',
  templateUrl: './asset-presentation.component.html',
  providers: [],
  styleUrls: ['./asset-presentation.component.css']
})

export class AssetPresentationComponent extends PageComponent {

  asset: AssetEntity;
  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  private name: string;

  constructor(private route: ActivatedRoute, private assetService: AssetService, private router: Router) {
    super();

  }

  ngOnInit() {
    let id: number = 0;
    this.routeSubscription = this.route.params.subscribe(params => this.name = params['name']);
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        id = queryParam['id'];
      }
    )
    this.tryCreateAsset(id);
  }

  tryCreateAsset(id: number) {
    this.assetService.getAsset(id)
      .then((asset) => {
        this.asset = asset;
        console.log(this.asset);
      });
  }
}
