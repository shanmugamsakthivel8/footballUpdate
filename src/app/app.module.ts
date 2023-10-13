import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrySelectionComponent } from './components/country-selection/country-selection.component';
import { CountryLeagueStandingsComponent } from './components/country-league-standings/country-league-standings.component';
import { TeamLastTenResultsComponent } from './components/team-last-ten-results/team-last-ten-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectionComponent,
    CountryLeagueStandingsComponent,
    TeamLastTenResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
