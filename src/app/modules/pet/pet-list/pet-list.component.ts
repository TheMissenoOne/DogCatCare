import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {PetService} from '../../../core/services/pet.service';
import {Pet} from '../../../shared/models/pet.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  petsOn = false;

  constructor(
    private headerService: HeaderService,
    private petService: PetService,
    private router: Router,
  ) {
    this.headerService.headerData = {
      icon: 'pets',
      pageTitle: 'Pets',
      routeUrl: 'pet',
      title: 'Pets'
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
