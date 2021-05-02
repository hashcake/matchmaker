import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbModule, MdbTabComponent, MdbTabsComponent } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamGridComponent } from './components/team-grid/team-grid.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchCalendarComponent } from './components/match-calendar/match-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamGridComponent,
    AddTeamComponent,
    MatchCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
