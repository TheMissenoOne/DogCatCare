import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceProviderService } from 'src/app/core/services/serviceProvider.service';
import { ServiceProvider } from 'src/app/shared/models/serviceProvider.model';
import {HeaderService} from '../../../core/services/header.service';

import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-mapa-main',
  templateUrl: './mapa-main.component.html',
  styleUrls: ['./mapa-main.component.css']
})
export class MapaMainComponent implements OnInit {
  searchText="";
  lat = -23
  lng = -46
  searchControl = new FormControl();
  serviceProviders: ServiceProvider[];
  filteredOptions: Observable<string[]>;
  infoWindowOpened = null
  previous_info_window = null
  provs: string[] = [];

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

  close_window(){
    if (this.previous_info_window != null ) {
      this.previous_info_window.close()
      }
    }
  focusMap(infoWindow){

    if (this.previous_info_window == null)
     this.previous_info_window = infoWindow;
    else{
     this.infoWindowOpened = infoWindow
     this.previous_info_window.close()
    }
    this.previous_info_window = infoWindow
  }


  viewServiceProvider(serviceProvider: ServiceProvider): void {
    this.serviceProviderService.serviceProvider = serviceProvider;
    this.router.navigate(['home/serviceProvider']);
  }

  searchProvider(serviceProviderName: string){
    for (let index = 0; index < this.serviceProviders.length; index++) {
      const element = this.serviceProviders[index];
      if(element.nome == serviceProviderName.split(" - ")[1] && element.tipo == serviceProviderName.split(" - ")[0] ){
        this.viewServiceProvider(element);
        this.lat = element.latitude;
        this.lng = element.longitude;
      }
    }

  }
  displayName(serviceProvider: ServiceProvider): string {
    return serviceProvider && serviceProvider.nome ? serviceProvider.nome : '';
  }
  ngOnInit(): void {
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

  refreshDataServices(): void {
    this.serviceProviders = this.serviceProviderService.listAll();
  }

}
