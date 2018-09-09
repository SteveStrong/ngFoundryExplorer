import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { NgFoundryModelsModule } from 'ng-foundry-models';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { BoidstestComponent } from './boidstest/boidstest.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BoidstestComponent
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
