import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Pet} from '../../shared/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetDesaparecidoService {

  public pet: Pet;

  private localStorageName = 'pets_desaparecidos';

  constructor(private snackBar: MatSnackBar) { }

  listPets(): Pet[] {
    return JSON.parse(localStorage.getItem(this.localStorageName));
  }

  listPetsByUserId(userId: number): Pet[] {
    const petsStored = JSON.parse(localStorage.getItem(this.localStorageName));
    if (petsStored) {
      const pets = petsStored.filter(obj => obj.userId === userId);
      return pets;
    }

    return null;
  }

  createPet(pet: Pet): boolean {
    const petsStored = this.listPets();
    pet.id = petsStored ? petsStored.length + 1 : 1 ;
    if (petsStored) {
      localStorage.setItem(this.localStorageName, JSON.stringify([...petsStored, pet ]));
    } else {
      localStorage.setItem(this.localStorageName, JSON.stringify([ pet ]));
    }
    this.showMessage('Pet cadastrado com sucesso!', false);
    return true;
  }

  updatePet(id: number, pet: Pet): boolean {
    let petsStored = this.listPets();
    const petStored = petsStored.filter(obj => obj.id === id);
    petsStored = petsStored.filter(obj => obj.id !== id);
    pet.id = id;
    pet.userId = petStored[0].userId;
    localStorage.setItem(this.localStorageName, JSON.stringify([...petsStored, pet ]));
    this.showMessage('Pet atualizado com sucesso!', false);
    return true;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
}
