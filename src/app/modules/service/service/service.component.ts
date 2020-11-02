import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {ServiceService} from '../../../core/services/service.service';
import {Service} from '../../../shared/models/service.model';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service: Service;

  image: string;

  formService: FormGroup;

  constructor(
    private headerService: HeaderService,
    private serviceService: ServiceService,
    private router: Router,
  ) {

    this.service = this.serviceService.service;

    if (typeof this.service === 'undefined') {
      this.router.navigate(['home']).then();
    }

    this.headerService.headerData = {
      icon: 'pets',
      pageTitle: 'Serviço',
      routeUrl: 'home',
      title: this.service.tipo + ' - ' + this.service.nome
    };

    this.formService = new FormGroup({
      nome: new FormControl(this.service.nome, Validators.required),
      latitude: new FormControl(this.service.latitude, Validators.required),
      longitude: new FormControl(this.service.longitude, Validators.required),
      tipo: new FormControl(this.service.tipo, Validators.required),
      desc: new FormControl(this.service.desc, Validators.required),
    });
    this.image = this.service.image;
  }

  ngOnInit(): void {
  }

}
