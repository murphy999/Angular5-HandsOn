import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { ExcerciseDetailsComponent } from './excercise-details/excercise-details.component';
import { GymService } from './gym.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExcerciseSearchComponent } from './excercise-search/excercise-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ExcerciseComponent,
    ExcerciseDetailsComponent,
    DashboardComponent,
    ExcerciseSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GymService],
  bootstrap: [AppComponent]
})
export class AppModule { }
