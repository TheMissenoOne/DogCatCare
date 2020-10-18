import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet.DashboardComponent } from './pet.dashboard.component';

describe('Pet.DashboardComponent', () => {
  let component: Pet.DashboardComponent;
  let fixture: ComponentFixture<Pet.DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pet.DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pet.DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
