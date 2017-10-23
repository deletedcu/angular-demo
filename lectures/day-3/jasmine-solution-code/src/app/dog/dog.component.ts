import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

	dogName: string = "Fido";
	hungerLevel: number = 0;

	eat() {
		if(this.hungerLevel > 0) {
			this.hungerLevel--;
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
