import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrySelectionComponent } from './components/country-selection/country-selection.component';
import { TeamLastTenResultsComponent } from './components/team-last-ten-results/team-last-ten-results.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'football-country',
    component: CountrySelectionComponent
  },
  {
    path: 'football-country/team-results/:teamId',
    component: TeamLastTenResultsComponent
  },
  { path: '',   redirectTo: 'football-country', pathMatch: 'full' },
  { path: '**',   component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
