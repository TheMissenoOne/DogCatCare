import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {AgendaService} from '../../../core/services/agenda.service';
import {AgendaEvento} from '../../../shared/models/agendaEvento.model';
import {DatePipe} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Service } from 'src/app/shared/models/service.model';
import { Pet } from 'src/app/shared/models/pet.model';
import { PetService } from 'src/app/core/services/pet.service';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-agenda-main',
  templateUrl: './agenda-main.component.html',
  styleUrls: ['./agenda-main.component.css'],
  providers: [DatePipe]

})
export class AgendaMainComponent implements OnInit {

  eventos: AgendaEvento[];
  evento: AgendaEvento;
  userId: number;
  dataValue: Date;

  formEvento: FormGroup;
  eventoFormOn = false;
  services: Service[];
  pets: Pet[];

  constructor(
    private headerService: HeaderService,
    private agendaService: AgendaService,
    private petService: PetService,
    private serviceService: ServiceService,
    private datePipe: DatePipe
  ) {
    this.headerService.headerData = {
      icon: 'event_note',
      pageTitle: 'Agenda',
      routeUrl: 'agenda',
      title: 'Agenda'
    };

    this.userId = this.headerService.user.id;
    this.services = this.serviceService.listAll();
    this.pets = this.petService.listPetsByUserId(this.userId);
  }

  ngOnInit(): void {
    this.dataValue = new Date();
    this.refreshData();
  }

  refreshData(): void {
    this.eventos = this.agendaService.listEventosByUserIdAndData(this.userId, this.datePipe.transform(this.dataValue , 'yyyy-MM-dd'));
  }

  openFormEvento(evento?: AgendaEvento): void {
    this.formEvento = new FormGroup({
      desc: new FormControl(evento ? evento.desc : '', Validators.required),
      data: new FormControl(evento ? evento.data : '', Validators.required),
      hora: new FormControl(evento ? evento.hora : '', Validators.required),
      pet: new FormControl(evento ? evento.pet : ''),
      service: new FormControl(evento ? ( evento.service ? evento.service : '' ) : '')
    });

    this.evento = evento;

    this.eventoFormOn = true;
  }

  handleSubmit(): void {
    if (this.formEvento.valid) {
      const eventoFormValues = this.formEvento.getRawValue();
      const evento = this.evento ? Object.assign(this.evento, eventoFormValues) : eventoFormValues;
      evento.userId = this.userId;
      evento.data = this.datePipe.transform(evento.data, 'yyyy-MM-dd');

      if (evento.id) {
        this.agendaService.updateEvento(evento.id, evento);
      } else {
        this.agendaService.createEvento(evento);
      }

      this.formEvento.reset();
      this.eventoFormOn = false;
      this.refreshData();

    } else {
      this.formEvento.markAllAsTouched();
    }
  }

  cancelFormEvento(): void {
    // tslint:disable-next-line:no-unused-expression
    this.formEvento ? this.formEvento.reset() : null;
    this.eventoFormOn = false;
  }

  get desc(): any {
    return this.formEvento.get('desc');
  }

  get data(): any {
    return this.formEvento.get('data');
  }

  get hora(): any {
    return this.formEvento.get('hora');
  }

}
