import { Injectable } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private snackBar: MatSnackBar) { }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users'));
  }

  createUser(user: User): boolean {
    const usersStored = this.getUsers();
    user.id = usersStored ? usersStored.length + 1 : 1 ;
    if (usersStored) {
      if (!this.findByEmail(user.email)) {
        localStorage.setItem('users', JSON.stringify([...usersStored, user ]));
      } else {
        this.showMessage('Já existe um usuário cadastro com o e-mail informado!', true);
        return false;
      }
    } else {
      localStorage.setItem('users', JSON.stringify([ user ]));
    }
    this.showMessage('Usuário cadastrado com sucesso', false);
    return true;
  }

  updateUser(id: number, user: User): boolean {
    let usersStored = this.getUsers();
    const userStored = usersStored.filter(obj => obj.id === id);
    usersStored = usersStored.filter(obj => obj.id !== id);
    user.id = id;
    user.senha = userStored[0].senha;
    localStorage.setItem('users', JSON.stringify([...usersStored, user ]));
    this.showMessage('Usuário atualizado com sucesso!', false);
    return true;
  }

  findByEmail(email: string): User {
    const usersStored = this.getUsers();
    return usersStored.find(u => u.email === email);
  }

  findById(id: number): User {
    const usersStored = this.getUsers();
    return usersStored.find(u => u.id === id);
  }

  verifyEmailPassword(user: User): boolean {
    const usersStored = this.getUsers();
    return usersStored.find(u => u.email === user.email && u.senha === user.senha) ? true : false;
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
