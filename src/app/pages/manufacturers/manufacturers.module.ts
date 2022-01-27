import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ManufacturersRoutingModule } from './manufacturers-routing.module';
import { ManufacturersComponent } from './manufacturers.component';
import { ManufacturersDetailComponent } from './components/manufacturers-detail/manufacturers-detail.component';



@NgModule({
  declarations: [
    ManufacturersComponent,
    ManufacturersDetailComponent    
  ],
  imports: [
    CommonModule,
    ManufacturersRoutingModule,
    HttpClientModule 
    
  ]
})
export class ManufacturersModule { }
