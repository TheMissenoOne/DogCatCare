import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../../util/validator";
import {Router} from "@angular/router";
import {UtilService} from "../../util/util.service";

@Component({
  selector: 'app-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.css']
})
export class PetsCreateComponent implements OnInit {

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required)
    });
  }

  toggleRegister() {
    if(this.formRegister.valid){
      this.router.navigate(['/home/pets']);
    } else {
      this.utilService.showMessage('Preencha todos os campos',true);
    }
  }

}
