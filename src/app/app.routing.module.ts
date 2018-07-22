import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { BoidstestComponent } from './boidstest/boidstest.component';
import { CanvastestComponent } from './canvastest/canvastest.component';
import { ShapetestComponent } from './shapetest/shapetest.component';

const routes: Routes = [
  { path: 'canvas', component: CanvastestComponent },
  { path: 'shape', component: ShapetestComponent },
  { path: 'boid', component: BoidstestComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'boid' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
