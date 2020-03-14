import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
