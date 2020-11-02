import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../../shared/models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  loading = false;

  user: User;

  formUser: FormGroup;

  constructor(
    private headerService: HeaderService,
    private userService: UserService,
    private router: Router
  ) {
    this.headerService.headerData = {
      icon: 'person',
      pageTitle: 'Perfil',
      routeUrl: 'account',
      title: 'Perfil'
    };
  }

  ngOnInit(): void {
    this.user = this.headerService.user;

    this.formUser = new FormGroup({
      nome: new FormControl(this.user.nome, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      telefones: new FormControl(this.user.telefones, Validators.required),
      cpf: new FormControl(this.user.cpf, Validators.required)
    });

  }

  get nome(): any {
    return this.formUser.get('nome');
  }

  get telefones(): any {
    return this.formUser.get('telefones');
  }

  handleSubmit(): void {
    if (this.formUser.valid) {
      const userFormValue = this.formUser.getRawValue();
      this.user = Object.assign(this.user, userFormValue);
      if (this.userService.updateUser(this.user.id , this.user)) {
        this.formUser.reset();
        this.router.navigate(['/home']);
      }
    } else {
      this.formUser.markAllAsTouched();
    }
  }
}
