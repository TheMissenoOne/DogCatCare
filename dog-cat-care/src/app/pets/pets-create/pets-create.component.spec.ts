import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsCreateComponent } from './pets-create.component';

describe('PetsCreateComponent', () => {
  let component: PetsCreateComponent;
  let fixture: ComponentFixture<PetsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
