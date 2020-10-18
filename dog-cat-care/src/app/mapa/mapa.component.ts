import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = -23.9484635;
  lng = -46.3980415;
  constructor() { }

  ngOnInit(): void {
  }

}
