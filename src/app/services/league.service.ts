import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryStandingTeamList, TopTenResults } from '../Interfaces/football-update';

export interface OptionHeader {
  headers: HttpHeaders;
}

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  footBallAPI:string = 'https://v3.football.api-sports.io/';
  options:OptionHeader = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "cb0daa65a3112e140c61c45ae1ce3ad7"
    })
  }
  constructor(private http: HttpClient) { }

  //used to get country league standings
  getCountryLeagueDetails(leagueId: number): Observable<CountryStandingTeamList> {
    const url = this.footBallAPI + `standings?league=${leagueId}&season=${new Date().getFullYear()}`;
    return this.http.get<CountryStandingTeamList>(url, this.options);
  }

  //used to get particular team last ten results
  getTeamTopTenResults(teamID: number): Observable<TopTenResults> {
    const leagueId = this.getSessionData('leagueID');
    const results = 10;
    const url = this.footBallAPI + `fixtures?league=${leagueId}&team=${teamID}&last=${results}`;
    return this.http.get<TopTenResults>(url, this.options);
  }

  //used to read from Local Json development usage
  getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }

  //retrive the data from localstorage
  getSessionData(key: string) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : false;
  }

  handleError(error: HttpErrorResponse) {
    console.log('Error',error);
  }
}
