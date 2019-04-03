import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTripsComponent } from './complete-trips.component';

describe('CompleteTripsComponent', () => {
  let component: CompleteTripsComponent;
  let fixture: ComponentFixture<CompleteTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
