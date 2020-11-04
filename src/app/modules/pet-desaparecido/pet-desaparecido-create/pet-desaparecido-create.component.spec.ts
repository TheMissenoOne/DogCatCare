import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDesaparecidoCreateComponent } from './pet-desaparecido-create.component';

describe('PetCreateComponent', () => {
  let component: PetDesaparecidoCreateComponent;
  let fixture: ComponentFixture<PetDesaparecidoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDesaparecidoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDesaparecidoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
