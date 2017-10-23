import { NgModule }             from '@angular/core';

import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
