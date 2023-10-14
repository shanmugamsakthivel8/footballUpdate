import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StandingTeamData } from 'src/app/Interfaces/foot-ball-update';

@Component({
  selector: 'app-country-league-standings',
  templateUrl: './country-league-standings.component.html',
  styleUrls: ['./country-league-standings.component.css']
})
export class CountryLeagueStandingsComponent {
  @Input() countryListStandingData:Array<StandingTeamData> = [];
  tableHeading: Array<string> = ['','','Name','Games','W','L','D','Goal Differene', 'Points'];
  constructor(private router: Router) {

  }
  ngOnInit() {
    console.log('adsdadas',this.countryListStandingData)
  }

  goToTeamResults(data:StandingTeamData) {
    this.router.navigate(['/home/top10Results'])
  }
}
