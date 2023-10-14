import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription, delay} from 'rxjs';
import { Country, CountryStandingTeamList, StandingTeamData } from 'src/app/Interfaces/football-update';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css']
})
export class CountrySelectionComponent {
  countryList: Array<Country> = [
    { id: 'englandSelect', name: 'england', leagueId: 39 },
    { id: 'spainSelect', name: 'spain', leagueId: 140 },
    { id: 'germanySelect', name: 'germany', leagueId: 78 },
    { id: 'franceSelect', name: 'france', leagueId: 61 },
    { id: 'italySelect', name: 'italy', leagueId: 135 }
  ]
  countryListStandingData: Array<StandingTeamData> = [];
  showStanding = false;
  selectedCountryLeague = 0;
  private subscription: Subscription[] = [];

  ngOnInit(): void {
    const leagueID = this.leagueService.getSessionData('leagueID');
    if (leagueID) {
      this.getStandings(Number(leagueID));
    }
  }

  constructor(private leagueService: LeagueService, private spinner: NgxSpinnerService) { }

  getStandings(leagueId: number) {
    this.selectedCountryLeague = leagueId;
    localStorage.setItem('leagueID', leagueId.toString());
    this.spinner.show();
    this.showStanding = false;

    // using service
    this.subscription.push(
      this.leagueService
        .getCountryLeagueDetails(leagueId)
        .subscribe((data: CountryStandingTeamList) => {
          this.spinner.hide();
          this.countryListStandingData = data.response[0].league.standings[0];
          this.showStanding = true;
        }, error => {
          this.leagueService.handleError(error);
        })
    );

    // using local json file
    // this.subscription.push(
    //   this.leagueService
    //     .getJSON('./assets/JSON/countryLeagueStanding.json').pipe(
    //      delay(1000)
    //     )
    //     .subscribe((data: CountryStandingTeamList) => {
    //       this.spinner.hide();
    //       this.countryListStandingData = data.response[0].league.standings[0];
    //       this.showStanding = true;
    //     },error => {
    //       this.leagueService.handleError(error);
    //     })
    // );
  }

  ngOnDestroy(): void {
    if(this.subscription && this.subscription.length > 0) {
      this.subscription.forEach(e=>{e.unsubscribe});
    }
  }
}
