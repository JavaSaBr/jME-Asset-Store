import {Component} from "@angular/core";
import {PageComponent} from "../../page.component";
import {SecurityService} from "../../../service/security.service";

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

  constructor(private readonly service: SecurityService) {
    super();
  }

  hasRole(toCheck: string): boolean {

    return this.service.hasRole(toCheck);
  }
}
