import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../core/services/header.service';

@Component({
  selector: 'app-assistente',
  templateUrl: './assistente.component.html',
  styleUrls: ['./assistente.component.css']
})
export class AssistenteComponent implements OnInit {

  constructor( private headerService: HeaderService) {
    this.headerService.headerData = {
      icon: 'android',
      pageTitle: 'Assistente',
      routeUrl: 'assistente',
      title: 'Assistente'
    };
  }

  ngOnInit(): void {
  }

}
