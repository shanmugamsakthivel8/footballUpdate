import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrySelectionComponent } from './components/country-selection/country-selection.component';
import { CountryLeagueStandingsComponent } from './components/country-league-standings/country-league-standings.component';
import { TeamLastTenResultsComponent } from './components/team-last-ten-results/team-last-ten-results.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectionComponent,
    CountryLeagueStandingsComponent,
    TeamLastTenResultsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
