import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrySelectionComponent } from './components/country-selection/country-selection.component';
import { TeamLastTenResultsComponent } from './components/team-last-ten-results/team-last-ten-results.component';

const routes: Routes = [
  {
    path: 'country-selection',
    component: CountrySelectionComponent
  },
  {
    path: 'country-selection/team-results/:teamId',
    component: TeamLastTenResultsComponent
  },
  { path: '',   redirectTo: 'country-selection', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
