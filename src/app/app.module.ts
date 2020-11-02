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
    PetListComponent,
    MapaMainComponent,
    AgendaMainComponent,
    PetCreateComponent,
    PetUpdateComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
