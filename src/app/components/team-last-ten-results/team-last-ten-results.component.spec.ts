import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLastTenResultsComponent } from './team-last-ten-results.component';

describe('TeamLastTenResultsComponent', () => {
  let component: TeamLastTenResultsComponent;
  let fixture: ComponentFixture<TeamLastTenResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLastTenResultsComponent]
    });
    fixture = TestBed.createComponent(TeamLastTenResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
