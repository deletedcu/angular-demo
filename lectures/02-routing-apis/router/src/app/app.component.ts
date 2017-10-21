import { Component } from '@angular/core';
import { JOBS } from './resume/jobs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobs = JOBS;
}
