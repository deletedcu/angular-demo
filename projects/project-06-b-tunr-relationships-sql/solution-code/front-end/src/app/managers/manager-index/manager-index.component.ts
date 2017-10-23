import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-manager-index',
  templateUrl: './manager-index.component.html',
  styleUrls: ['./manager-index.component.css']
})
export class ManagerIndexComponent implements OnInit {

	allManagers = [];

  deleteManager(deletedManager) {
    this.managersService.deleteManager(deletedManager)
    .subscribe(response => {
      let managerIndex = this.allManagers.indexOf(deletedManager);
      this.allManagers.splice(managerIndex, 1);
    });
  }

  constructor(
  	private managersService : ManagersService
  ) { }

  ngOnInit() {
  	this.managersService.getAllManagers()
  		.subscribe(response => {
				console.log(response.json());
				this.allManagers = response.json()
			});
  }

}
