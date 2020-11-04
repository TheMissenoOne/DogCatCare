import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDesaparecidoListComponent } from './pet-desaparecido-list.component';

describe('PetListComponent', () => {
  let component: PetDesaparecidoListComponent;
  let fixture: ComponentFixture<PetDesaparecidoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDesaparecidoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDesaparecidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
