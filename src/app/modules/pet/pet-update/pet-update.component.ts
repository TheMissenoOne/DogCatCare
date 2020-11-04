import {Component, OnInit} from '@angular/core';
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
  medLog: MedLog;
  medLogs: MedLog[];

  loading = false;

  image: string;

  formPet: FormGroup;
  formMedLog: FormGroup;

  tipos = ['Cachorro', 'Gato'];
  temperamentos = ['Agitado', 'Alegre', 'Amoroso', 'Bravo', 'Carente', 'Carinhoso', 'Dócil', 'Valente'];
  conds = [{label: "Sim" ,value:true},{label: "Não" ,value:false}];
  sexos =['Macho','Fêmea'];
  tiposMedLog = ['Vacina', 'Exame', 'Cirurgia'];
  update = true;
  medLogFormOn = false;

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

    this.pet = this.petService.pet;

    if (typeof this.pet === 'undefined') {
      this.router.navigate(['home/pet']).then();
    } else {
      this.refreshMedLogData();

      this.image = this.pet.image;

      this.formPet = new FormGroup({
        nome: new FormControl(this.pet.nome, Validators.required),
        tipo: new FormControl(this.pet.tipo, Validators.required),
        dataNascimento: new FormControl(this.pet.dataNascimento, Validators.required),
        cor: new FormControl(this.pet.cor, Validators.required),
        sexo: new FormControl(this.pet.sexo, Validators.required),
        raca: new FormControl(this.pet.raca, Validators.required),
        temperamento: new FormControl(this.pet.temperamento, Validators.required),
        castrado: new FormControl(this.pet.castrado, Validators.required),
        chip: new FormControl(this.pet.chip, Validators.required),
        necessidadesMisc: new FormControl(this.pet.necessidadesMisc)
      });


    }
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

      get sexo(): any {
        return this.formPet.get('sexo');
      }

      get temperamento(): any {
        return this.formPet.get('temperamento');
      }

      get chip(): any {
        return this.formPet.get('chip');
      }

      get raca(): any {
        return this.formPet.get('raca');
      }

      get castrado(): any {
        return this.formPet.get('castrado');
      }

      get necessidadesMisc(): any {
        return this.formPet.get('necessidadesMisc');
      }

  handleSubmit(): void {
    if (this.formPet.valid) {
      const pet = this.formPet.getRawValue();
      pet.image = this.image;
      if (this.petService.updatePet(this.pet.id, pet)) {
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

  // MEDLOG

  refreshMedLogData(): void {
    this.medLogs = this.medlogService.listMedLogsByPetId(this.pet.id);
  }

  toggleUpdateMedlog(): void {
    this.update = !this.update;
    // tslint:disable-next-line:no-unused-expression
    this.formMedLog ? this.formMedLog.reset() : null;
    this.medLogFormOn = false;
  }

  openFormMedLog(medLog?: MedLog): void {
    this.formMedLog = new FormGroup({
      tipo: new FormControl(medLog ? medLog.tipo : '', Validators.required),
      desc: new FormControl(medLog ? medLog.desc : '', Validators.required),
      data: new FormControl(medLog ? medLog.data : '', Validators.required),
    });

    this.medLog = medLog;

    this.medLogFormOn = true;
  }

  cancelFormMedLog(): void {
    // tslint:disable-next-line:no-unused-expression
    this.formMedLog ? this.formMedLog.reset() : null;
    this.medLogFormOn = false;
  }

  handleSubmitMedLog(): void {
    if (this.formMedLog.valid) {
      const medLogFormValues = this.formMedLog.getRawValue();
      const medLog = this.medLog ? Object.assign(this.medLog, medLogFormValues) : medLogFormValues;
      medLog.petId = this.pet.id;

      if (medLog.id) {
        this.medlogService.updateMedLog(medLog.id, medLog);
      } else {
        this.medlogService.createMedLog(medLog);
      }

      this.formMedLog.reset();
      this.medLogFormOn = false;
      this.refreshMedLogData();

    } else {
      this.formPet.markAllAsTouched();
    }
  }

  get tipoMedLog(): any {
    return this.formMedLog.get('tipo');
  }

  get descMedLog(): any {
    return this.formMedLog.get('desc');
  }

  get dataMedLog(): any {
    return this.formMedLog.get('data');
  }
}
