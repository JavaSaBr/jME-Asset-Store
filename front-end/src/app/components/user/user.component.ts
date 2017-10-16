
import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Element {
  name: string;
  position: number;
  role: string;
}

const data: Element[] = [
  {position: 1, name: 'Denis', role: "Admin"},
  {position: 1, name: 'Alex', role: "User"},

];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

/**
 * @title Basic table
 */
@Component({
  selector: 'app-user',
  styleUrls: ['user.component.css'],
  templateUrl: './user.component.html',
  providers: [ExampleDataSource]
})
export class UserComponent {
  displayedColumns = ['position', 'name', 'role'];
  dataSource = new ExampleDataSource();
}

