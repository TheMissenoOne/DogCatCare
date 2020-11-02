import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Service} from '../../shared/models/service.model';
import {Pet} from '../../shared/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public service: Service;

  constructor(private snackBar: MatSnackBar) { }

  private localStorageName = 'services';

  services: Service[] = [
    {
      id: 1,
      nome: 'Banho e Tosa',
      preco: 'R$ 50,00',
      serviceProviderId: 1
    },
    {
      id: 2,
      nome: 'Banho',
      preco: 'R$ 30,00',
      serviceProviderId: 1
    },
    ];

  listAll(): Service[] {
    return this.services;
  }

  listByProviderId(providerId: number): Service[] {
    const stored = this.listAll();
    if (stored) {
      const providers = stored.filter(obj => obj.serviceProviderId === providerId);
      return providers;
    }

    return null;
  }

  findById(id: number): Service {
    const stored = this.listAll();
    return stored.find(u => u.id === id);
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
