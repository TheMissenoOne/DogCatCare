import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../core/services/header.service';
import {AgendaEvento} from '../../shared/models/agendaEvento.model';
import {AgendaService} from '../../core/services/agenda.service';
import {DatePipe} from '@angular/common';
import {ServiceProvider} from '../../shared/models/serviceProvider.model';
import {ServiceProviderService} from '../../core/services/serviceProvider.service';
import {Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  eventos: AgendaEvento[];
  searchControl = new FormControl();
  serviceProviders: ServiceProvider[];
  filteredOptions: Observable<string[]>;
  provs: string[] = [];
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

    for (let index = 0; index < this.serviceProviders.length; index++) {
      this.provs[this.provs.length] = this.serviceProviders[index].tipo+" - "+this.serviceProviders[index].nome;
    }
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.provs.filter(provs => provs.toLowerCase().includes(filterValue));
  }

  refreshDataAgenda(): void {
    this.eventos = this.agendaService.listEventosByUserIdAndData(this.userId, this.datePipe.transform(this.dataValue , 'yyyy-MM-dd'));
    console.log();
  }

  refreshDataServices(): void {
    this.serviceProviders = this.serviceProviderService.listAll();
  }

  searchProvider(serviceProviderName: string){
    for (let index = 0; index < this.serviceProviders.length; index++) {
      const element = this.serviceProviders[index];
      if(element.nome == serviceProviderName.split(" - ")[1] && element.tipo == serviceProviderName.split(" - ")[0] ){
        this.viewServiceProvider(element);
      }
    }
  }

  viewServiceProvider(serviceProvider: ServiceProvider): void {
    this.serviceProviderService.serviceProvider = serviceProvider;
    this.router.navigate(['home/serviceProvider']);
  }
}
