import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { NgFoundryModelsModule } from 'ngFoundryModels';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { BoidstestComponent } from './boidstest/boidstest.component';
import { CanvastestComponent } from './canvastest/canvastest.component';
import { ShapetestComponent } from './shapetest/shapetest.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BoidstestComponent,
    ShapetestComponent,
    CanvastestComponent
  ],
  imports: [
    NgFoundryModelsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
