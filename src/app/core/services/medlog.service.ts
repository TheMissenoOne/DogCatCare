import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MedLog} from '../../shared/models/medlog.model';
import {Pet} from '../../shared/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class MedlogService {

  public medLog: MedLog;

  constructor(private snackBar: MatSnackBar) {
  }

  listMedLogs(): MedLog[] {
    return JSON.parse(localStorage.getItem('medLogs'));
  }

  listMedLogsByPetId(petId: number): MedLog[] {
    const medLogsStored = JSON.parse(localStorage.getItem('medLogs'));
    if (medLogsStored) {
      const medLogs = medLogsStored.filter(obj => obj.petId === petId);
      return medLogs;
    }

    return null;
  }

  createMedLog(medLog: MedLog): boolean {
    const medLogsStored = this.listMedLogs();
    medLog.id = medLogsStored ? medLogsStored.length + 1 : 1 ;
    if (medLogsStored) {
      localStorage.setItem('medLogs', JSON.stringify([...medLogsStored, medLog ]));
    } else {
      localStorage.setItem('medLogs', JSON.stringify([ medLog ]));
    }
    this.showMessage('Registro cadastrado com sucesso!', false);
    return true;
  }

  updateMedLog(id: number, medLog: MedLog): boolean {
    let medLogsStored = this.listMedLogs();
    const medLogStored = medLogsStored.filter(obj => obj.id === id);
    medLogsStored = medLogsStored.filter(obj => obj.id !== id);
    medLog.id = id;
    medLog.petId = medLogStored[0].petId;
    localStorage.setItem('medLogs', JSON.stringify([...medLogsStored, medLog ]));
    this.showMessage('Registro atualizado com sucesso!', false);
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
