import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../util/validator";
import {Router} from "@angular/router";
import {UtilService} from "../util/util.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      usernameRegister: new FormControl('', Validators.required),
      passwordRegister: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      emailRegister: new FormControl('', Validators.required)}, {
      validator: MustMatch('passwordRegister', 'passwordConfirm')
    });
  }

  toggleLogin() {
    if(this.formLogin.valid){
      this.router.navigate(['/home']);
    } else {
      this.utilService.showMessage('Preencha todos os campos',true);
    }
  }

  toggleRegister() {
    if(this.formRegister.valid){
      this.router.navigate(['/']);
    } else {
      this.utilService.showMessage('Preencha todos os campos',true);
    }
  }

}
