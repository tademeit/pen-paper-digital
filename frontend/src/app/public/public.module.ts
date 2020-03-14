import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './pages/register/register.component';
import {PublicRoutingModule} from "./public-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class PublicModule { }
