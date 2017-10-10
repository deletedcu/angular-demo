import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-manager-show',
  templateUrl: './manager-show.component.html',
  styleUrls: ['./manager-show.component.css']
})
export class ManagerShowComponent implements OnInit {

	oneManager;

  constructor(
  	private route : ActivatedRoute,
  	private managersService : ManagersService
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.managersService.getOneManager(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneManager = response.json();
  		});
  	});
  }

}
