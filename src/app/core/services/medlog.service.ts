import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MedLog} from '../../shared/models/medlog.model';

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
    this.showMessage('Cadastrado com sucesso!', false);
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
