import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceProvider} from '../../shared/models/serviceProvider.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  public serviceProvider: ServiceProvider;

  constructor(private snackBar: MatSnackBar) { }

  private localStorageName = 'service_provider';

  serviceProviders: ServiceProvider[] = [
    {
      id: 1,
      latitude: 123,
      longitude: 123,
      nome: 'Kiko',
      tipo: 'PetShop',
      desc: 'Vendemos os mais diversificados produtos para o seu bichinho.',
      image: 'https://www.dataon.com.br/wp-content/uploads/2019/09/Como-montar-um-Petshop.jpg',
  },
    {
      id: 2,
      latitude: 123,
      longitude: 123,
      nome: 'Amigão',
      tipo: 'PetShop',
      desc: 'PetShop com banho e tosa.',
      image: 'https://image.freepik.com/vetores-gratis/logotipo-de-petshop-para-gatos-e-caes_9645-750.jpg',
    }
  ];

  listAll(): ServiceProvider[] {
    return this.serviceProviders;
  }

  findById(id: number): ServiceProvider {
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
