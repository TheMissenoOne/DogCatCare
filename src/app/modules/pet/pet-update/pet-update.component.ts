import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {PetService} from '../../../core/services/pet.service';
import {Pet} from '../../../shared/models/pet.model';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedLog} from '../../../shared/models/medlog.model';
import {MedlogService} from '../../../core/services/medlog.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {

  pet: Pet;
  medLogs: MedLog[];

  loading = false;

  image: string;

  formPet: FormGroup;

  tipos = ['Cachorro', 'Gato'];
  update = true;

  constructor(
    private headerService: HeaderService,
    private petService: PetService,
    private medlogService: MedlogService,
    private router: Router
  ) {
    this.headerService.headerData = {
      icon: 'pets',
      pageTitle: 'Atualizar Pet',
      routeUrl: 'pet',
      title: 'Atualizar Pet'
    };
  }

  ngOnInit(): void {
    this.pet = this.petService.pet;

    if(typeof this.pet === 'undefined'){
      this.router.navigate(['home/pet']).then();
    }

    this.medLogs = this.medlogService.listMedLogsByPetId(this.pet.id);

    this.image = this.pet.image;

    this.formPet = new FormGroup({
      nome: new FormControl(this.pet.nome, Validators.required),
      tipo: new FormControl(this.pet.tipo, Validators.required),
      dataNascimento: new FormControl(this.pet.dataNascimento, Validators.required),
      cor: new FormControl(this.pet.cor, Validators.required)
    });
  }

  get nome(): any {
    return this.formPet.get('nome');
  }

  get tipo(): any {
    return this.formPet.get('tipo');
  }

  get dataNascimento(): any {
    return this.formPet.get('dataNascimento');
  }

  get cor(): any {
    return this.formPet.get('cor');
  }

  handleSubmit(): void {
    if (this.formPet.valid) {
      const pet = this.formPet.getRawValue();
      pet.image = this.image;
      if (this.petService.updatePet( this.pet.id , pet)) {
        this.formPet.reset();
        this.router.navigate(['./home/pet']).then();
      }
    } else {
      this.formPet.markAllAsTouched();
    }
  }

  onUploadChange(evt: any): void {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e): void {
    this.image = 'data:image/png;base64,' + btoa(e.target.result);
  }

  toggleUpdateMedlog(): void {
    this.update = !this.update;
  }
}
