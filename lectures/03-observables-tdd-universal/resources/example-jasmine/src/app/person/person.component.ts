import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

	@Input('personName') personName : string = "Bob";
	@Input('language') language : string = "English";

	greeting() {
		if (this.language === "Italian") {
			return `Ciao, mi chiamo ${this.personName}.`;
		} else {
			return `Hello, my name is ${this.personName}.`;
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
