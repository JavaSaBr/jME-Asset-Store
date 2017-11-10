import {Component} from "@angular/core";
import {Router} from '@angular/router';
import{AssetService} from "../../../service/asset/asset.service";
import {PageComponent} from "../../page.component";
import {AssetParams} from "../../../model/params/asset-params";

@Component({
  moduleId: module.id,
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  providers:[AssetService],
  styleUrls: ['./create-asset.component.css']
})

export class AddAssetComponent extends PageComponent{
  private _info: AssetParams;

  private _message: string;

  constructor(private readonly router: Router, private assetService: AssetService) {
    super();
    this._message = '';
    this._info = new AssetParams("","",0);
  }

  tryCreate() {
    this.assetService.createAsset(this._info,(message, result) => {
        this._message = message;
        if(result){
          this._info = new AssetParams("","",0);
          this.router.navigateByUrl('/user-assets');
        }
    });

  }


  get info(): AssetParams {
    return this._info;
  }

  set info(value: AssetParams) {
    this._info = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  private isValid(): boolean{
    return this.info.name.length>0 && this.info.description.length>0;
  }
}
