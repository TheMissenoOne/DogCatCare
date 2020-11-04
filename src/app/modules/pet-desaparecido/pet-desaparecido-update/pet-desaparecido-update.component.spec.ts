import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDesaparecidoUpdateComponent } from './pet-desaparecido-update.component';

describe('PetUpdateComponent', () => {
  let component: PetDesaparecidoUpdateComponent;
  let fixture: ComponentFixture<PetDesaparecidoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDesaparecidoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDesaparecidoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
