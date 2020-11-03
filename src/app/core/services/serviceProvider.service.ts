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
      latitude: -23.9684635,
      longitude: -46.280415,
      nome: 'Kiko',
      tipo: 'PetShop',
      desc: 'Vendemos os mais diversificados produtos para o seu bichinho.',
      image: 'https://www.dataon.com.br/wp-content/uploads/2019/09/Como-montar-um-Petshop.jpg',
  },
    {
      id: 2,
      latitude: -23.2684635,
      longitude: -46.240415,
      nome: 'Amigão',
      tipo: 'PetShop',
      desc: 'PetShop com banho e tosa.',
      image: 'https://image.freepik.com/vetores-gratis/logotipo-de-petshop-para-gatos-e-caes_9645-750.jpg',
    },
    {
      id: 3,
      latitude: -23.2184635,
      longitude: -46.40415,
      nome: 'João',
      tipo: 'Passeador',
      desc: 'Levarei seu pet para passear com horário marcado.',
      image: 'https://image.freepik.com/vetores-gratis/cara-sem-cara-passeando-com-cachorro_18591-44866.jpg',
    },
    {
      id: 4,
      latitude: -23.623835,
      longitude: -46.5415,
      nome: 'Maria',
      tipo: 'Passeador',
      desc: 'Levarei seu pet para passear a qualquer momento.',
      image: 'https://image.freepik.com/vetores-gratis/menina-andando-com-o-cachorro_61103-144.jpg',
    },
    {
      id: 5,
      latitude: -23.123835,
      longitude: -46.3415,
      nome: 'PetCenter',
      tipo: 'PetShop',
      desc: 'Produtos e artigos para pets.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOUBpO-Dxjlo3-ffD8SxlpA2iVi0eibCLHYw&usqp=CAU',
    },
    {
      id: 6,
      latitude: -23.423835,
      longitude: -46.8415,
      nome: 'Pousada Miau',
      tipo: 'PetHotel',
      desc: 'Um hotel para hospeda seu pet quando precisar.',
      image: 'https://media.istockphoto.com/vectors/pet-hotel-vector-id519164038?b=1&k=6&m=519164038&s=612x612&w=0&h=LJqhjJ6OVgkhzG787hLLv6YF4-RIluOYbg5WQhMHXqE=',
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
