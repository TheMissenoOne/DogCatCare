import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PetDesaparecidoService} from '../../../core/services/pet-desaparecido.service';

@Component({
  selector: 'app-pet-desaparecido-create',
  templateUrl: './pet-desaparecido-create.component.html',
  styleUrls: ['./pet-desaparecido-create.component.css']
})
export class PetDesaparecidoCreateComponent implements OnInit {

  loading = false;

  image = 'https://www.austinpetsalive.org/assets/placeholder/dog-placeholder.jpg';

  formPet = new FormGroup({
    nome: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    cor: new FormControl('', Validators.required),
    raca: new FormControl('', Validators.required),
    necessidadesMisc: new FormControl()
  });

  tipos = ['Cachorro', 'Gato'];

  constructor(
    private headerService: HeaderService,
    private petService: PetDesaparecidoService,
    private router: Router
  ) {
    this.headerService.headerData = {
      icon: 'location_city',
      pageTitle: 'Adiconar Pet Desaparecido',
      routeUrl: 'pet_desaparecido',
      title: 'Adiconar Pet Desaparecido'
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

  get raca(): any {
    return this.formPet.get('raca');
  }

  handleSubmit(): void {
    if (this.formPet.valid) {
      const pet = this.formPet.getRawValue();
      pet.image = this.image;
      pet.userId = this.headerService.user.id;
      if (this.petService.createPet(pet)) {
        this.formPet.reset();
        this.router.navigate(['./home/pet_desaparecido']).then();
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
