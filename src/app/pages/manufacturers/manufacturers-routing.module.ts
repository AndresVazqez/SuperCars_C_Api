import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturersDetailComponent } from './components/manufacturers-detail/manufacturers-detail.component';
import { ManufacturersComponent } from './manufacturers.component';

const routes: Routes = [
  {
    path: "", component: ManufacturersComponent
  },
  {
    path: ":idManufacturer", component: ManufacturersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturersRoutingModule { }
