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
        path: 'assistente',
        component: AssistenteComponent
      },
      {
        path: 'pet',
        component: PetListComponent
      },
      {
        path: 'serviceProvider',
        component: ServiceProviderComponent
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
        path: 'agenda',
        component: AgendaMainComponent
      },
      {
        path: 'mapa',
        component: MapaMainComponent
      },
      {
        path: '**',
        component: DashboardComponent
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
