import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../core/services/header.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
  ) {
    this.headerService.headerData = {
      icon: 'info',
      pageTitle: 'Sobre',
      routeUrl: 'sobre',
      title: 'Sobre'
    };
  }

  ngOnInit(): void {
  }

}
