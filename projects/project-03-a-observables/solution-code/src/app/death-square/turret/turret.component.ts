import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent implements OnInit {

	@Input('turretNumber') turretNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
