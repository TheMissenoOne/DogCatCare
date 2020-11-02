import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../core/services/header.service';
import {AgendaEvento} from '../../shared/models/agendaEvento.model';
import {AgendaService} from '../../core/services/agenda.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  eventos: AgendaEvento[];
  dataValue: Date;
  userId: number;

  constructor(
    private headerService: HeaderService,
    private agendaService: AgendaService,
    private datePipe: DatePipe
  ) {
    this.headerService.headerData = {
      icon: 'home',
      pageTitle: 'Dashboard',
      routeUrl: 'dashboard',
      title: 'Dashboard'
    };

    this.userId = this.headerService.user.id;
  }

  ngOnInit(): void {
    this.dataValue = new Date();
    this.refreshData();
  }

  refreshData(): void {
    this.eventos = this.agendaService.listEventosByUserIdAndData(this.userId, this.datePipe.transform(this.dataValue , 'yyyy-MM-dd'));
  }

}
