import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {ServiceProviderService} from '../../../core/services/serviceProvider.service';
import {ServiceProvider} from '../../../shared/models/serviceProvider.model';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../../../shared/models/service.model';
import {ServiceService} from '../../../core/services/service.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './serviceProvider.component.html',
  styleUrls: ['./serviceProvider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  serviceProvider: ServiceProvider;
  services: Service[];

  image: string;
  view = true;

  formServiceProvider: FormGroup;

  constructor(
    private headerService: HeaderService,
    private serviceProviderService: ServiceProviderService,
    private serviceService: ServiceService,
    private router: Router,
  ) {

    this.serviceProvider = this.serviceProviderService.serviceProvider;

    if (typeof this.serviceProvider === 'undefined') {
      this.router.navigate(['home']).then();
    }

    this.services = this.serviceService.listByProviderId(this.serviceProvider.id);

    this.headerService.headerData = {
      icon: 'pets',
      pageTitle: 'Prestador de Serviço',
      routeUrl: 'home',
      title: this.serviceProvider.tipo + ' - ' + this.serviceProvider.nome
    };

    this.formServiceProvider = new FormGroup({
      nome: new FormControl(this.serviceProvider.nome, Validators.required),
      latitude: new FormControl(this.serviceProvider.latitude, Validators.required),
      longitude: new FormControl(this.serviceProvider.longitude, Validators.required),
      tipo: new FormControl(this.serviceProvider.tipo, Validators.required),
      desc: new FormControl(this.serviceProvider.desc, Validators.required),
    });
    this.image = this.serviceProvider.image;
  }

  ngOnInit(): void {
  }

  toggleViewContratar(): void {
    this.view = !this.view;
  }
}
