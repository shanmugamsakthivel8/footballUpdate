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
  private sub: Subscription[] = [];
  constructor (private route: ActivatedRoute, private league:LeagueService, public spinner: NgxSpinnerService) {
    const teamId = Number(this.route.snapshot.paramMap.get('teamId'));
    this.spinner.show();

    // using service

    // this.sub.push(
    //   this.league
    //     .getTeamTopTenResults(teamId)
    //     .subscribe((data: TopTenResults) => {
    //       this.spinner.hide();
    //       this.teamTopTenResult = data.response;
    //       console.log('data', data);
    //     })
    // );

    //used for local json file
    this.sub.push(
      this.league
        .getJSON('./assets/JSON/teamLastTenResult.json').pipe(
          delay(1000)
        )
        .subscribe((data: TopTenResults) => {
          this.spinner.hide();
          this.teamTopTenResult = data.response;
        })
    );
  }

  ngOnDestroy(): void {
    if (this.sub && this.sub.length > 0) {
      this.sub.forEach(e=> e.unsubscribe());
    }
  }
}
