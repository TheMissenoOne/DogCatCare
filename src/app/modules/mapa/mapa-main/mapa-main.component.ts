import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from 'src/app/core/services/serviceProvider.service';
import { ServiceProvider } from 'src/app/shared/models/serviceProvider.model';
import {HeaderService} from '../../../core/services/header.service';


@Component({
  selector: 'app-mapa-main',
  templateUrl: './mapa-main.component.html',
  styleUrls: ['./mapa-main.component.css']
})
export class MapaMainComponent implements OnInit {
  searchText="";
  lat = -23
  lng = -46
  serviceProviders: ServiceProvider[];
  constructor(
    private serviceProviderService: ServiceProviderService,
    private router: Router,
    private headerService: HeaderService) {
    this.headerService.headerData = {
      icon: 'map',
      pageTitle: 'Mapa',
      routeUrl: 'mapa',
      title: 'Mapa'
    };
  }

  viewServiceProvider(serviceProvider: ServiceProvider): void {
    this.serviceProviderService.serviceProvider = serviceProvider;
    this.router.navigate(['home/serviceProvider']);
  }

  searchProvider(serviceProvider: ServiceProvider){
    this.searchText = serviceProvider.nome;
    this.lat = serviceProvider.latitude;
    this.lng = serviceProvider.longitude;

  }

  ngOnInit(): void {
    this.refreshDataServices();
  }
  refreshDataServices(): void {
    this.serviceProviders = this.serviceProviderService.listAll();
  }

}
