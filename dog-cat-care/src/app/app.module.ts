import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { OnsenModule } from 'ngx-onsenui';
import {ReactiveFormsModule} from "@angular/forms";
import { PetsComponent } from './pets/pets.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AssistenteComponent } from './assistente/assistente.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfigComponent } from './config/config.component';
import { SobreComponent } from './sobre/sobre.component';
import { OngsComponent } from './ongs/ongs.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule  } from '@angular/material/snack-bar'
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import { PetsCreateComponent } from './pets/pets-create/pets-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PetsComponent,
    MapaComponent,
    AgendaComponent,
    AssistenteComponent,
    PerfilComponent,
    ConfigComponent,
    SobreComponent,
    OngsComponent,
    DahsboardComponent,
    PetsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule,
    NgbModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    SlickCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP-RHgyCZFKceXxrl9EjPo4w2VdhE9kaM'
    }),
    BrowserAnimationsModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
