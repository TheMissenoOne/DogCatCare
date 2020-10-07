import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [];
  constructor() {
    this.users[0]={
        type: "Owner",
        nome: "João da Silva",
        dataNascimento: "1995-02-07",
        email: "joaodasilva@email.com",
        password: "12345678",
        telefones: ["(13)94321-1234"],
        cpf: "321.123.456-87",
        pets: [{
          nome: "Miau",
          dataNascimento: "2015-03-02",
          cor: "Branco",
          tipo: "Gato",
          medLog: [{
            tipo: "Vacina",
            desc: "Clamidiose",
            data: "2016-02-01"
          },
          {
            tipo: "Vacina",
            desc: "Raiva",
            data: "2016-02-01"
          }]
        },
        {
          nome: "Rex",
          dataNascimento: "2017-04-09",
          cor: "Caramelo",
          tipo: "Cão",
          medLog: [{
            tipo: "Vacina",
            desc: "Raiva",
            data: "2018-05-11"
          }]
        }
        ]
    }
  }

  createOwner(nomeOwner,dataNascimentoOwner,
    emailOwner,passwordOwner,telefoneOwner,cpfOwner)
  {
    var newOwner = {
      type: "Owner",
      nome: nomeOwner,
      dataNascimento: dataNascimentoOwner,
      email: emailOwner,
      password: passwordOwner,
      telefones: [telefoneOwner],
      cpf: cpfOwner,
      pets: []
    }
    this.users[this.users.length]=newOwner;
    return cpfOwner;
  }

  findOwner(cpfOwner){
    var element=-1;
    for (let index = 0; this.users[index].cpf != cpfOwner ; index++) {
      element =index;
    }
    return element;
  }

  createPet(nomePet,dataNascimentoPet,
    tipoPet,corPet,cpfOwner)
  {
    var newPet = {
      type: "Pet",
      nome: nomePet,
      dataNascimento: dataNascimentoPet,
      tipo: tipoPet,
      cor: corPet,
      medLogs: []
    }
    this.users[this.findOwner(cpfOwner)].pet[this.users[this.findOwner(cpfOwner)].pet.length]=newPet;
  }

  findPet(ownerId,nomePet){
    var owner= this.users[ownerId];
    var petId= -1;
    for (let index = 0; owner.pets[index].nome != nomePet ; index++) {
      petId  = index;
    }
    return petId;
  }

  addMedLog(tipoLog,descLog,dataLog,cpfOwner,nomePet){
    var newMedLog ={
      tipo: tipoLog,
      desc: descLog,
      data: dataLog
    }
    var ownerId = this.findOwner(cpfOwner);
    var petId = this.findPet(ownerId,nomePet);
    this.users[ownerId].pets[petId].medLogs[this.users[ownerId].pets[petId].medLogs.lenght]= newMedLog;
  }
}
