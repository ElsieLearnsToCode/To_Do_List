import { Component } from '@angular/core';
import { GoallistComponent } from './goallist/goallist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleCase = 'My First Angular App';
}
