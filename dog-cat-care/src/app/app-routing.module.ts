import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {PetsComponent} from "./pets/pets.component";
import {DahsboardComponent} from "./dahsboard/dahsboard.component";
import {MapaComponent} from "./mapa/mapa.component";
import {AgendaComponent} from "./agenda/agenda.component";
import {AssistenteComponent} from "./assistente/assistente.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {ConfigComponent} from "./config/config.component";
import {SobreComponent} from "./sobre/sobre.component";
import {OngsComponent} from "./ongs/ongs.component";
import { PetDashboardComponent } from './pet.dashboard/pet.dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DahsboardComponent
      },
      {
        path: 'pets',
        component: PetsComponent,
        children: [
          {
            path: 'dashboard',
            component: PetDashboardComponent
          }
        ]
      },
      {
        path: 'map',
        component: MapaComponent
      },
      {
        path: 'agenda',
        component: AgendaComponent
      },
      {
        path: 'assistente',
        component: AssistenteComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'config',
        component: ConfigComponent
      },
      {
        path: 'sobre',
        component: SobreComponent
      },
      {
        path: 'ongs',
        component: OngsComponent
      },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
