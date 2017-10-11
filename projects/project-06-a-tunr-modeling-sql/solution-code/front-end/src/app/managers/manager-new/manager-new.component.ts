import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-manager-new',
  templateUrl: './manager-new.component.html',
  styleUrls: ['./manager-new.component.css']
})
export class ManagerNewComponent implements OnInit {

	newManager = <any>{};

    constructor(
      private managersService : ManagersService
    ) { }

    ngOnInit() {

    }

    saveManager(newManager) {
      console.log("saving manager");
      console.log(newManager);
      this.managersService.saveManager(newManager)
          .subscribe(response => {
        console.log(response.json());
        let manager = response.json();
        window.location.href = "/managers/" + manager.id;
      })
    }

}
