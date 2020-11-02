import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';

@Component({
  selector: 'app-agenda-main',
  templateUrl: './agenda-main.component.html',
  styleUrls: ['./agenda-main.component.css']
})
export class AgendaMainComponent implements OnInit {

  constructor( private headerService: HeaderService) {
    this.headerService.headerData = {
      icon: 'event_note',
      pageTitle: 'Agenda',
      routeUrl: 'agenda',
      title: 'Agenda'
    };
  }

  ngOnInit(): void {
  }

}
