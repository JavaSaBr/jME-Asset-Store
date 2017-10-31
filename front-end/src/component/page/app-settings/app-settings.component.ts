import {Component} from "@angular/core";
import {PageComponent} from "../../page.component";

/**
 * @author Alena Solonevich
 */
@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent extends PageComponent {

  constructor() {
    super();
  }
}
