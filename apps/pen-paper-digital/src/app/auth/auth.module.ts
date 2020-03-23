import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [RegisterComponent],
    imports: [
      AuthRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule
    ]
})
export class AuthModule { }
