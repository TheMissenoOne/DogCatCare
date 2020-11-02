import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';

@Component({
  selector: 'app-mapa-main',
  templateUrl: './mapa-main.component.html',
  styleUrls: ['./mapa-main.component.css']
})
export class MapaMainComponent implements OnInit {
  places = [{
    desc : 'Casa',
    lat : -23.9684635,
    lng : -46.280415
  },{
    desc : 'Petshop',
    lat : -22.93484635,
    lng : -43.50415
  },{
    desc : 'Petshop 2',
    lat : -24.9484635,
    lng : -46.580415
  }]
  lat = this.places[0].lat
  lng = this.places[0].lng
  constructor( private headerService: HeaderService) {
    this.headerService.headerData = {
      icon: 'map',
      pageTitle: 'Mapa',
      routeUrl: 'mapa',
      title: 'Mapa'
    };
  }

  ngOnInit(): void {
  }

}
