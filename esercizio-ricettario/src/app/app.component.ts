import { Component } from '@angular/core';
import { ViewType } from './ViewNames.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view : ViewType = 'recipes'

  OnChangeView(view) {
    this.view = view
  }
}
