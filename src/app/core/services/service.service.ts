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
    {
      id: 3,
      nome: 'Passeio',
      preco: 'R$ 20,00',
      serviceProviderId: 3
    },
    {
      id: 4,
      nome: 'Passeio',
      preco: 'R$ 20,00',
      serviceProviderId: 4
    },
    {
      id: 5,
      nome: 'Banho',
      preco: 'R$ 33,00',
      serviceProviderId: 2
    },
    {
      id: 6,
      nome: 'Tosa',
      preco: 'R$ 39,00',
      serviceProviderId: 2
    },
    {
      id: 7,
      nome: 'Tosa',
      preco: 'R$ 29,00',
      serviceProviderId: 5
    },
    {
      id: 8,
      nome: 'Banho',
      preco: 'R$ 19,00',
      serviceProviderId: 5
    },
    {
      id: 9,
      nome: '20 min passseio',
      preco: 'R$ 10,00',
      serviceProviderId: 5
    },
    {
      id: 10,
      nome: 'Diária',
      preco: 'R$ 70,00',
      serviceProviderId: 6
    },
    {
      id: 11,
      nome: 'Semana',
      preco: 'R$ 350,00',
      serviceProviderId: 6
    },
    {
      id: 12,
      nome: 'Diária + Banho + Tosa',
      preco: 'R$ 100,00',
      serviceProviderId: 6
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
