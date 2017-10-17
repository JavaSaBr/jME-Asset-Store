import {Component} from "@angular/core";
import {PageComponent} from "../../page.component";

/**
 * @author Alex Brui
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends PageComponent {

  constructor() {
    super();
  }
}
