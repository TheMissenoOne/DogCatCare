import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {ServiceProviderService} from '../../../core/services/serviceProvider.service';
import {ServiceProvider} from '../../../shared/models/serviceProvider.model';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../../../shared/models/service.model';
import {ServiceService} from '../../../core/services/service.service';
import {DatePipe} from '@angular/common';
import {AgendaService} from '../../../core/services/agenda.service';
import {AgendaEvento} from '../../../shared/models/agendaEvento.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PaymentComponent} from '../payment/payment.component';

@Component({
  selector: 'app-service-provider',
  templateUrl: './serviceProvider.component.html',
  styleUrls: ['./serviceProvider.component.css'],
  providers: [DatePipe]
})
export class ServiceProviderComponent implements OnInit {

  serviceProvider: ServiceProvider;
  services: Service[];
  service: Service;
  userId: number;

  image: string;
  view = true;
  serviceFormOn = false;
  formServiceProvider: FormGroup;
  formService: FormGroup;

  constructor(
    private headerService: HeaderService,
    private serviceProviderService: ServiceProviderService,
    private serviceService: ServiceService,
    private agendaService: AgendaService,
    private datePipe: DatePipe,
    private router: Router,
    private dialog: MatDialog
  ) {

    this.userId = this.headerService.user.id;

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
    this.serviceFormOn = false;
    // tslint:disable-next-line:no-unused-expression
    this.formService ? this.formService.reset() : null;
  }

  openFormService(service: Service): void {
    this.formService = new FormGroup({
      desc: new FormControl(service.nome, Validators.required),
      preco: new FormControl(service.preco, Validators.required),
      data: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
    });

    this.service = service;

    this.serviceFormOn = true;
  }

  cancelFormService(): void {
    // tslint:disable-next-line:no-unused-expression
    this.formService ? this.formService.reset() : null;
    this.serviceFormOn = false;
  }

  handleSubmitService(): void {
    if (this.formService.valid) {
      const eventoFormValues = this.formService.getRawValue();
      const evento: AgendaEvento = {
        data: this.datePipe.transform(eventoFormValues.data, 'yyyy-MM-dd'),
        desc: eventoFormValues.desc,
        hora: eventoFormValues.hora,
        userId: this.userId
      };

      const data = {eventoFormValues, evento};

      this.openPaymentModal(data);

      //this.agendaService.createEvento(evento, evento.desc);

      this.formService.reset();
      this.serviceFormOn = false;
    } else {
      this.formService.markAllAsTouched();
    }
  }

  openPaymentModal(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.maxWidth = '99%';
    dialogConfig.panelClass = 'custom-dialog-container';
    this.dialog.open(PaymentComponent, dialogConfig);
  }


  get data(): any {
    return this.formService.get('data');
  }

  get hora(): any {
    return this.formService.get('hora');
  }


}
