import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../util/validator";

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      usernameRegister: new FormControl('', Validators.required),
      passwordRegister: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      emailRegister: new FormControl('', Validators.required)}, {
      validator: MustMatch('password', 'passwordConfirm')
    });
  }

  toggleLogin() {
    if(this.formLogin.valid){
      alert('Logado com sucesso!');
    }
  }

  toggleRegister() {
    if(this.formRegister.valid){
      alert('Cadastrado com sucesso!');
    }
  }

}
