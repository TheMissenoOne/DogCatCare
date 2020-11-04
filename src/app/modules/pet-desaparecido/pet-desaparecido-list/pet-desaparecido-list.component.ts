import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {Pet} from '../../../shared/models/pet.model';
import {Router} from '@angular/router';
import {PetDesaparecidoService} from '../../../core/services/pet-desaparecido.service';

@Component({
  selector: 'app-pet-desaparecido-list',
  templateUrl: './pet-desaparecido-list.component.html',
  styleUrls: ['./pet-desaparecido-list.component.css']
})
export class PetDesaparecidoListComponent implements OnInit {

  pets: Pet[];

  petsOn = false;

  constructor(
    private headerService: HeaderService,
    private petService: PetDesaparecidoService,
    private router: Router,
  ) {
    this.headerService.headerData = {
      icon: 'pets',
      pageTitle: 'Pets Desaparecidos',
      routeUrl: 'pet_desaparecido',
      title: 'Pets Desaparecidos'
    };
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.pets = this.petService.listPetsByUserId(this.headerService.user.id);
    this.petsOn = this.pets !== null;
  }

  updatePet(pet: Pet): void {
    this.petService.pet = pet;
    this.router.navigate(['home/pet/update']).then();
  }
}
