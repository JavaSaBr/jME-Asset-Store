import {Component} from "@angular/core";
import {PageComponent} from "../../page.component";
import {AssetService} from "../../../service/asset/asset.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";


@Component({
  moduleId: module.id,
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  providers: [AssetService],
  styleUrls: ['./load-file.component.css']
})

export class LoadFileComponent extends PageComponent {

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = {percentage: 0}

  constructor(private assetService: AssetService) {
    super();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.assetService.loadFileToAsset(this.currentFileUpload, message => {});

    this.selectedFiles = undefined;
  }
}
