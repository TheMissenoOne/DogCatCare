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
      nome: 'Luna',
      tipo: 'PetShop',
      desc: 'Os mais diversos serviços para o seu bichinho.',
      image: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/02/logo-para-petshop-20.jpg',
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
      tipo: 'Passeadora',
      desc: 'Levarei seu pet para passear a qualquer momento.',
      image: 'https://image.freepik.com/vetores-gratis/menina-andando-com-o-cachorro_61103-144.jpg',
    },
    {
      id: 5,
      latitude: -23.123835,
      longitude: -46.3415,
      nome: 'PetCenter',
      tipo: 'PetShop',
      desc: 'Diversos serviços para seu pet.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOUBpO-Dxjlo3-ffD8SxlpA2iVi0eibCLHYw&usqp=CAU',
    },
    {
      id: 6,
      latitude: -23.423835,
      longitude: -46.8415,
      nome: 'Horel Miau',
      tipo: 'PetHotel',
      desc: 'Um hotel para hospedar seu pet quando precisar.',
      image: 'https://media.istockphoto.com/vectors/pet-hotel-vector-id519164038?b=1&k=6&m=519164038&s=612x612&w=0&h=LJqhjJ6OVgkhzG787hLLv6YF4-RIluOYbg5WQhMHXqE=',
    },
    {
      id: 7,
      latitude: -23.323835,
      longitude: -46.2415,
      nome: 'Renata Santos',
      tipo: 'Cuidadora',
      desc: 'Farei companhia e cuidarei do seu pet.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ87NSZbqYcyszVSPuKu6ayIt9kmvwvG7nG6w&usqp=CAU',
    },
    {
      id: 8,
      latitude: -23.3232835,
      longitude: -46.24515,
      nome: 'Renan Tavares',
      tipo: 'Veterinário',
      desc: 'Cuide da saúde e garanta o bem estar do seu pet conosco.',
      image: 'https://static.vecteezy.com/system/resources/previews/000/123/775/original/free-vet-elements-vector.jpg',
    },
    {
      id: 9,
      latitude: -23.3932835,
      longitude: -46.7515,
      nome: 'Julio Guimarães',
      tipo: 'Adestrador',
      desc: 'Treinamento de pets de todos as raças e tamanhos.',
      image: 'https://2.bp.blogspot.com/-i3p9eSapePI/T3yX-lRuqPI/AAAAAAAAEcA/9l7kzJ-e0QI/s1600/sitCommand.jpg',
    },
    {
      id: 10,
      latitude: -23.3332835,
      longitude: -46.3515,
      nome: 'Daniela Fernandes',
      tipo: 'PetMóvel',
      desc: 'Transporte de pets 24h (Apenas corridas na baixada santista).',
      image: 'https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/Como-montar-um-Pet-Shop-Movel-passo-a-passo-2-300x134.jpg',
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
