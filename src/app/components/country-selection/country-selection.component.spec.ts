import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectionComponent } from './country-selection.component';

describe('CountrySelectionComponent', () => {
  let component: CountrySelectionComponent;
  let fixture: ComponentFixture<CountrySelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySelectionComponent]
    });
    fixture = TestBed.createComponent(CountrySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
