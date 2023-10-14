import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country, CountryStandingTeamList, StandingTeamData } from 'src/app/Interfaces/football-update';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css']
})
export class CountrySelectionComponent {
  countryList:Array<Country> = [
    { id: 'englandSelect', name: 'england', code:'eg', leagueId: 39, leagueName: 'Premier League' },
    { id: 'spainSelect', name: 'spain', code:'sp', leagueId: 140, leagueName: 'La Liga'  },
    { id: 'germanySelect', name: 'germany', code:'gr', leagueId: 78, leagueName: 'Bundesliga'  },
    { id: 'franceSelect', name: 'france', code:'fr', leagueId: 61, leagueName: 'Ligue 1'  },
    { id: 'italySelect', name: 'italy', code:'it', leagueId: 135, leagueName: 'Serie A'  }
  ]
  countryListStandingData: Array<StandingTeamData> = [];
  showStanding = false;
  selectedCountryLeague = 0;
  private sub: Subscription[] = [];

  ngOnInit(): void {
    const leagueID = this.league.getSessionData('leagueID');
    if (leagueID) {
      this.getStandings(Number(leagueID));
    }
  }

  constructor(private league: LeagueService) {}

  getStandings(leagueId: number) {
    this.selectedCountryLeague = leagueId;
    localStorage.setItem('leagueID',leagueId.toString());
    this.league.setLoading();
    this.showStanding = false;
    // this.sub.push(
    //   this.league
    //     .getCountryLeagueDetails(leagueId)
    //     .subscribe((data: CountryStandingTeamList) => {
    //       this.league.clearLoading();
    //       this.countryListStandingData = data.response[0].league.standings[0]
    //      console.log('data',data);
    //      this.showStanding = true;
    //     })
    // );

    this.sub.push(
      this.league
        .getJSON('./assets/JSON/countryLeagueStanding.json')
        .subscribe((data: CountryStandingTeamList) => {
          this.league.clearLoading();
          this.countryListStandingData = data.response[0].league.standings[0];
         this.showStanding = true;
        })
    );
  }

  ngOnDestroy(): void {
    
  }
}
