import { Injectable } from '@angular/core';
import {AgendaEvento} from '../../shared/models/agendaEvento.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  public agenda: AgendaEvento;

  constructor(private snackBar: MatSnackBar) { }

  listEventos(): AgendaEvento[] {
    return JSON.parse(localStorage.getItem('agenda'));
  }

  listEventosByUserIdAndData(userId: number, data: string): AgendaEvento[] {
    const eventosStored = this.listEventos();
    if (eventosStored) {
      const eventos = eventosStored.filter(obj => {
        return obj.userId === userId && obj.data === data;
      });
      return eventos.sort((n1, n2) => {

        if (n1.hora > n2.hora) {
          return 1;
        }

        if (n1.hora < n2.hora) {
          return -1;
        }
      });
    }

    return null;
  }

  async createEvento(evento: AgendaEvento, service?: string): boolean {
    const eventosStored = this.listEventos();
    evento.id = eventosStored ? eventosStored.length + 1 : 1 ;
    if (eventosStored) {
      localStorage.setItem('agenda', JSON.stringify([...eventosStored, evento ]));
    } else {
      localStorage.setItem('agenda', JSON.stringify([ evento ]));
    }

    if (service){
      this.showMessage('Solicitação de serviço enviada com sucesso!', false);
      await this.delay(10000);
      this.showMessage(service + ' contratado com sucesso!', false);
    } else {
      this.showMessage('Evento cadastrado com sucesso!', false);
    }

    return true;
  }

  delay(ms: number): any {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  updateEvento(id: number, evento: AgendaEvento): boolean {
    let eventosStored = this.listEventos();
    const eventoStored = eventosStored.filter(obj => obj.id === id);
    eventosStored = eventosStored.filter(obj => obj.id !== id);
    evento.id = id;
    evento.userId = eventoStored[0].userId;
    console.log(eventosStored);
    console.log(eventoStored);
    localStorage.setItem('agenda', JSON.stringify([...eventosStored, evento ]));
    this.showMessage('Evento atualizado com sucesso!', false);
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
