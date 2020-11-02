import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';

@Component({
  selector: 'app-mapa-main',
  templateUrl: './mapa-main.component.html',
  styleUrls: ['./mapa-main.component.css']
})
export class MapaMainComponent implements OnInit {

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
