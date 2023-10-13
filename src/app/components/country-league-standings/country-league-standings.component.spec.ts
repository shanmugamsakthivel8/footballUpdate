import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLeagueStandingsComponent } from './country-league-standings.component';

describe('CountryLeagueStandingsComponent', () => {
  let component: CountryLeagueStandingsComponent;
  let fixture: ComponentFixture<CountryLeagueStandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryLeagueStandingsComponent]
    });
    fixture = TestBed.createComponent(CountryLeagueStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
