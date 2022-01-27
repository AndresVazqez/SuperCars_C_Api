import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupercarsDetailComponent } from './components/supercars-detail/supercars-detail.component';
import { SupercarsComponent } from './supercars.component';

const routes: Routes = [
  {
    path: "", component: SupercarsComponent
  },
  {
    path: ":idSuperCar", component: SupercarsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupercarsRoutingModule { }
