import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {PetService} from '../../../core/services/pet.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  loading = false;

  image = 'https://www.austinpetsalive.org/assets/placeholder/dog-placeholder.jpg';

  formPet = new FormGroup({
    nome: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    cor: new FormControl('', Validators.required)
  });

  tipos = ['Cachorro', 'Gato'];

  constructor(
    private headerService: HeaderService,
    private petService: PetService,
    private router: Router
  ) {
    this.headerService.headerData = {
      icon: 'pets',
      pageTitle: 'Adicionar Pet',
      routeUrl: 'pet',
      title: 'Adicionar Pet'
    };
  }

  ngOnInit(): void {
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
      pet.userId = this.headerService.user.id;
      if (this.petService.createPet(pet)) {
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
      if (file.size / 1024 < 300){
        const reader = new FileReader();

        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      } else {
        this.petService.showMessage('Imagem muito grande (> 300KB)', true);
      }

    }
  }

  handleReaderLoaded(e): void {
    this.image = 'data:image/png;base64,' + btoa(e.target.result);
  }
}
