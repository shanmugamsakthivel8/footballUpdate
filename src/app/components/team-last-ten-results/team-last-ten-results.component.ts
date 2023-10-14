import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamResult, TopTenResults } from 'src/app/Interfaces/football-update';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-team-last-ten-results',
  templateUrl: './team-last-ten-results.component.html',
  styleUrls: ['./team-last-ten-results.component.css']
})
export class TeamLastTenResultsComponent {
  teamTopTenResult: Array<TeamResult> = [];
  private sub: Subscription[] = [];
  constructor (private route: ActivatedRoute, private league:LeagueService) {
    const teamId = Number(this.route.snapshot.paramMap.get('teamId'));
    // this.league.setLoading();
    // this.sub.push(
    //   this.league
    //     .getTeamTopTenResults(teamId)
    //     .subscribe((data: TopTenResults) => {
    //       this.league.clearLoading();
    //       this.teamTopTenResult = data.response;
    //      console.log('data',data);
    //     })
    // );

    this.sub.push(
      this.league
        .getJSON('./assets/JSON/teamLastTenResult.json')
        .subscribe((data: TopTenResults) => {
          this.teamTopTenResult = data.response;
          console.log('sdfasfsdfsdffd',data);
        })
    );
  }
}
