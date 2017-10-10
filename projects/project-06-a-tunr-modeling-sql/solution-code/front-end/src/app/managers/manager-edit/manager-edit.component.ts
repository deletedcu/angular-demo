import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {

	updatedManager = <any>{};

  constructor(
    private route : ActivatedRoute,
    private managersService : ManagersService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.managersService.getOneManager(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedManager = response.json();
      });
    });
  }

  updateManager(updatedManager) {
    console.log("updating manager yo!");
    this.managersService.updateManager(updatedManager)
    .subscribe(response => {
      console.log(response.json());
      let manager = response.json();
      window.location.href = "/managers/" + manager.id;
    });  
  }

}
