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

  /**
   * The method hasRoleAdmin allows user with role ADMIN to see app-setting content
   * @returns {boolean}
   */
  hasRoleAdmin(): boolean {
    console.log("Call the method hasRoleAdmin in App-settings");
    return this.service.hasRoleAdmin();
  }
}
