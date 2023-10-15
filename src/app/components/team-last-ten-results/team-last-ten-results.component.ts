import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription, delay } from 'rxjs';
import { TeamResult, TopTenResults } from 'src/app/Interfaces/football-update';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-team-last-ten-results',
  templateUrl: './team-last-ten-results.component.html',
  styleUrls: ['./team-last-ten-results.component.css']
})
export class TeamLastTenResultsComponent implements OnDestroy {
  teamTopTenResult: Array<TeamResult> = [];
  private subscriptions: Subscription[] = [];
  
  constructor (private route: ActivatedRoute, private leagueService:LeagueService, private spinner: NgxSpinnerService) {
    const teamId:number = Number(this.route.snapshot.paramMap.get('teamId'));
    this.spinner.show();

    // using service
    this.subscriptions.push(
      this.leagueService
        .getTeamTopTenResults(teamId)
        .subscribe((data: TopTenResults) => {
          this.spinner.hide();
          this.teamTopTenResult = data.response;
        },
        error => {
          this.leagueService.handleError(error);
        })
    );

    //used for local json file
    // this.subscriptions.push(
    //   this.leagueService
    //     .getJSON('./assets/JSON/teamLastTenResult.json').pipe(
    //       delay(1000)
    //     )
    //     .subscribe((data: TopTenResults) => {
    //       this.spinner.hide();
    //       this.teamTopTenResult = data.response;
    //     },
    //     error => {
    //       this.leagueService.handleError(error);
    //     })
    // );
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(e=> e.unsubscribe());
    }
  }
}
