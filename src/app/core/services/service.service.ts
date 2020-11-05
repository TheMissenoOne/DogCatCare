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
    {
      id: 13,
      nome: '1 Horaa',
      preco: 'R$ 40,00',
      serviceProviderId: 7
    },
    {
      id: 14,
      nome: 'Espediente completo (9:00 ás 17:00)',
      preco: 'R$ 200,00',
      serviceProviderId: 7
    },
    {
      id: 15,
      nome: 'Consulta',
      preco: 'R$ 25,00',
      serviceProviderId: 8
    },
    {
      id: 16,
      nome: 'Procedimento Simples',
      preco: 'R$ 300,00',
      serviceProviderId: 8
    },
    {
      id: 17,
      nome: 'Castração',
      preco: 'R$ 750,00',
      serviceProviderId: 8
    },
    {
      id: 18,
      nome: 'Treinamento (Hora)',
      preco: 'R$ 75,00',
      serviceProviderId: 9
    },
    {
      id: 19,
      nome: 'Treinamento em Domicilio (Hora)',
      preco: 'R$ 100,00',
      serviceProviderId: 9
    },
    {
      id: 20,
      nome: 'Transporte (Municipal)',
      preco: 'R$ 50,00',
      serviceProviderId: 10
    },
    {
      id: 21,
      nome: 'Transporte (Intermunicipal)',
      preco: 'R$ 80,00',
      serviceProviderId: 10
    }
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
