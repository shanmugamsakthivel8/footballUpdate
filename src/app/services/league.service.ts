import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CountryStandingTeamList } from '../Interfaces/football-update';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  footBallAPI = 'https://v3.football.api-sports.io/';
  isloading = new Subject<boolean>();
  isLoad$ = this.isloading.asObservable();
  options = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "cb0daa65a3112e140c61c45ae1ce3ad7"
    })
  }
  constructor(private http: HttpClient) {}

  getCountryLeagueDetails(leagueId: number): Observable<CountryStandingTeamList> {
    const url = this.footBallAPI + `standings?league=${leagueId}&season=${new Date().getFullYear()}`;
    return this.http.get<CountryStandingTeamList>(url, this.options);
  }

  getJSON(url:string): Observable<any> {
    return this.http.get(url);
}

  setLoading() {
   this.isloading.next(true);
  }

  clearLoading() {
    this.isloading.next(false);
  }
}
