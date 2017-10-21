import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
      'first comment!',
      'nice work!',
      'I would also like to congratulate you!'
  ];
}
