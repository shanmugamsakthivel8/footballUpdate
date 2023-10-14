import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StandingTeamData } from 'src/app/Interfaces/football-update';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-country-league-standings',
  templateUrl: './country-league-standings.component.html',
  styleUrls: ['./country-league-standings.component.css']
})
export class CountryLeagueStandingsComponent {
  @Input() countryListStandingData:Array<StandingTeamData> = [];
  tableHeading: Array<string> = ['','','Name','Games','W','L','D','Goal Differene', 'Points'];
  selectedTeam = '';
  constructor(private router: Router, private league: LeagueService) {

  }
  ngOnInit() {
    const teamSelected = this.league.getSessionData('teamSelected');
    if (teamSelected) {
      this.selectedTeam = teamSelected;
    }
  }

  goToTeamResults(data:StandingTeamData) {
    this.selectedTeam = data.team.name;
    localStorage.setItem('teamSelected',this.selectedTeam);
    this.router.navigate(['football-country/team-results',data.team.id]);
  }
}
