import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './pages/register/register.component';
import {PublicRoutingModule} from "./public-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [RegisterComponent],
    imports: [
      PublicRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule
    ]
})
export class PublicModule { }
