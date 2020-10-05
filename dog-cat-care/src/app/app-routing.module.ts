import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
