import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { BoidstestComponent } from './boidstest/boidstest.component';

const routes: Routes = [
  { path: 'boid', component: BoidstestComponent }
  { path: 'welcome', component: WelcomeComponent }
  { path: '', pathMatch: 'full', redirectTo: 'boid' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
