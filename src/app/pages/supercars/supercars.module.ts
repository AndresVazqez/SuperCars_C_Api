import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SupercarsRoutingModule } from './supercars-routing.module';
import { SupercarsComponent } from './supercars.component';
import { SupercarsDetailComponent } from './components/supercars-detail/supercars-detail.component';


@NgModule({
  declarations: [
    SupercarsComponent,
    SupercarsDetailComponent
  ],
  imports: [
    CommonModule,
    SupercarsRoutingModule,
    HttpClientModule
  ]
})
export class SupercarsModule { }
