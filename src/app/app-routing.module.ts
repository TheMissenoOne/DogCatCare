import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultLayoutComponent} from './shared/layouts/default-layout.component';
import {UserLoginComponent} from './modules/user/user-login/user-login.component';
import {LoginRegisterLayoutComponent} from './shared/layouts/login-register-layout.component';
import {AssistenteComponent} from './modules/assistente/assistente.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PetListComponent} from './modules/pet/pet-list/pet-list.component';
import {AgendaMainComponent} from './modules/agenda/agenda-main/agenda-main.component';
import {MapaMainComponent} from './modules/mapa/mapa-main/mapa-main.component';
import {PetCreateComponent} from './modules/pet/pet-create/pet-create.component';
import {PetUpdateComponent} from './modules/pet/pet-update/pet-update.component';
import {VerifySessionService} from './core/services/verify-session.service';
import {UserAccountComponent} from './modules/user/user-account/user-account.component';
import {ServiceProviderComponent} from './modules/service/serviceProvider/serviceProvider.component';
import {PetDesaparecidoListComponent} from './modules/pet-desaparecido/pet-desaparecido-list/pet-desaparecido-list.component';
import {PetDesaparecidoCreateComponent} from './modules/pet-desaparecido/pet-desaparecido-create/pet-desaparecido-create.component';
import {PetDesaparecidoUpdateComponent} from './modules/pet-desaparecido/pet-desaparecido-update/pet-desaparecido-update.component';
import {SobreComponent} from './modules/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: LoginRegisterLayoutComponent,
    children: [
      {
        path: '',
        component: UserLoginComponent
      }
    ]
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    canActivate: [VerifySessionService],
    children: [
      {
        path: 'account',
        component: UserAccountComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'assistente',
        component: AssistenteComponent
      },
      {
        path: 'serviceProvider',
        component: ServiceProviderComponent
      },
      {
        path: 'pet',
        component: PetListComponent
      },
      {
        path: 'pet/create',
        component: PetCreateComponent
      },
      {
        path: 'pet/update',
        component: PetUpdateComponent
      },
      {
        path: 'pet_desaparecido',
        component: PetDesaparecidoListComponent
      },
      {
        path: 'pet_desaparecido/create',
        component: PetDesaparecidoCreateComponent
      },
      {
        path: 'pet_desaparecido/update',
        component: PetDesaparecidoUpdateComponent
      },
      {
        path: 'agenda',
        component: AgendaMainComponent
      },
      {
        path: 'mapa',
        component: MapaMainComponent
      },
      {
        path: 'sobre',
        component: SobreComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
