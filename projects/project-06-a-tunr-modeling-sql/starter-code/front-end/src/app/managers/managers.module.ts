import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ManagerIndexComponent } from './manager-index/manager-index.component';
import { ManagersComponent } from './managers.component';
import { ManagersService } from './managers.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ManagersComponent, ManagerIndexComponent],
  providers: [ManagersService]
})
export class ManagersModule { }
