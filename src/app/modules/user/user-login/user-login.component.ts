import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MustMatch, regexValidators as validators} from '../../../shared/util/validator';
import {UserService} from '../../../core/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loading = false;
  login = true;

  formLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {

    this.formRegister = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      telefones: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.pattern(validators.email), Validators.required]),
      senha: ['', [Validators.required, Validators.minLength(8)]],
      senhaConfirm: ['', Validators.required]
    }, {
      validator: MustMatch('senha', 'senhaConfirm')
    });


  }

  get email(): any {
    return this.formLogin.get('email');
  }

  get senha(): any {
    return this.formLogin.get('senha');
  }

  handleLogin(): any {
    if (this.formLogin.valid) {
      let user = this.formLogin.getRawValue();
      if (this.userService.verifyEmailPassword(user)) {

        user = this.userService.findByEmail(user.email);
        user.senha = null;

        localStorage.setItem('session', JSON.stringify(user));
        this.router.navigate(['/home']).then();
      } else {
        this.userService.showMessage('Usuário e/ou Senha incorretos!', true);
      }
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

  toggleLoginRegister(): any {
    this.login = !this.login;
  }

  handleRegister(): any {
    if (this.formRegister.valid) {
      const user = this.formRegister.getRawValue();
      delete user.senhaConfirm;
      if (this.userService.createUser(user)) {
        this.formRegister.reset();
        this.login = true;
      }
    } else {
      this.formRegister.markAllAsTouched();
    }
  }

  get nomeRegister(): any {
    return this.formRegister.get('nome');
  }

  get telefonesRegister(): any {
    return this.formRegister.get('telefones');
  }

  get cpfRegister(): any {
    return this.formRegister.get('cpf');
  }

  get emailRegister(): any {
    return this.formRegister.get('email');
  }

  get senhaRegister(): any {
    return this.formRegister.get('senha');
  }

  get senhaConfirmRegister(): any {
    return this.formRegister.get('senhaConfirm');
  }
}
