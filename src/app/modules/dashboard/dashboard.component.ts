import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../core/services/header.service';
import {AgendaEvento} from '../../shared/models/agendaEvento.model';
import {AgendaService} from '../../core/services/agenda.service';
import {DatePipe} from '@angular/common';
import {ServiceProvider} from '../../shared/models/serviceProvider.model';
import {ServiceProviderService} from '../../core/services/serviceProvider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  eventos: AgendaEvento[];
  serviceProviders: ServiceProvider[];
  dataValue: Date;
  userId: number;
  searchText="";

  constructor(
    private headerService: HeaderService,
    private agendaService: AgendaService,
    private serviceProviderService: ServiceProviderService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.headerService.headerData = {
      icon: 'home',
      pageTitle: 'Início',
      routeUrl: 'dashboard',
      title: 'Início'
    };

    this.userId = this.headerService.user.id;
  }

  ngOnInit(): void {
    this.dataValue = new Date();
    this.refreshDataAgenda();
    this.refreshDataServices();
  }

  refreshDataAgenda(): void {
    this.eventos = this.agendaService.listEventosByUserIdAndData(this.userId, this.datePipe.transform(this.dataValue , 'yyyy-MM-dd'));
    console.log();
  }

  refreshDataServices(): void {
    this.serviceProviders = this.serviceProviderService.listAll();
  }

  searchProvider(serviceProvider: ServiceProvider){
    this.viewServiceProvider(serviceProvider);
  }

  viewServiceProvider(serviceProvider: ServiceProvider): void {
    this.serviceProviderService.serviceProvider = serviceProvider;
    this.router.navigate(['home/serviceProvider']);
  }
}
