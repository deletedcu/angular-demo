import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagersComponent } from './managers.component';
import { ManagerIndexComponent } from './manager-index/manager-index.component';


const aboutRoutes: Routes = [
    {
        path: 'managers',
        component: ManagersComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: ManagerIndexComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ManagersRoutingModule { }