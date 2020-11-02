import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMainComponent } from './mapa-main.component';

describe('MapaMainComponent', () => {
  let component: MapaMainComponent;
  let fixture: ComponentFixture<MapaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
