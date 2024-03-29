import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './modules/user/user-login/user-login.component';
import { NavComponent } from './core/nav/nav.component';
import { DefaultLayoutComponent } from './shared/layouts/default-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {LoginRegisterLayoutComponent} from './shared/layouts/login-register-layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AssistenteComponent } from './modules/assistente/assistente.component';
import { HeaderComponent } from './core/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PetListComponent } from './modules/pet/pet-list/pet-list.component';
import { MapaMainComponent } from './modules/mapa/mapa-main/mapa-main.component';
import { AgendaMainComponent } from './modules/agenda/agenda-main/agenda-main.component';
import { PetCreateComponent } from './modules/pet/pet-create/pet-create.component';
import { PetUpdateComponent } from './modules/pet/pet-update/pet-update.component';
import {MatSelectModule} from '@angular/material/select';
import { UserAccountComponent } from './modules/user/user-account/user-account.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { AgmCoreModule } from '@agm/core';
import { ServiceProviderComponent } from './modules/service/serviceProvider/serviceProvider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PaymentComponent } from './modules/service/payment/payment.component';
import {PetDesaparecidoCreateComponent} from './modules/pet-desaparecido/pet-desaparecido-create/pet-desaparecido-create.component';
import {PetDesaparecidoUpdateComponent} from './modules/pet-desaparecido/pet-desaparecido-update/pet-desaparecido-update.component';
import {PetDesaparecidoListComponent} from './modules/pet-desaparecido/pet-desaparecido-list/pet-desaparecido-list.component';
import { SobreComponent } from './modules/sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NavComponent,
    DefaultLayoutComponent,
    LoginRegisterLayoutComponent,
    AssistenteComponent,
    HeaderComponent,
    DashboardComponent,
    MapaMainComponent,
    AgendaMainComponent,
    PetCreateComponent,
    PetUpdateComponent,
    PetListComponent,
    PetDesaparecidoCreateComponent,
    PetDesaparecidoUpdateComponent,
    PetDesaparecidoListComponent,
    UserAccountComponent,
    ServiceProviderComponent,
    PaymentComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBP-RHgyCZFKceXxrl9EjPo4w2VdhE9kaM'
        }),
    IvyCarouselModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
