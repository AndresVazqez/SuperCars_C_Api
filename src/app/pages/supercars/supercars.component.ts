import { Component, OnInit } from '@angular/core';
import { SuperCarsInterface } from './models/supercars';
import { SupercarsService } from './service/supercars.service';

@Component({
  selector: 'app-supercars',
  templateUrl: './supercars.component.html',
  styleUrls: ['./supercars.component.scss']
})


export class SupercarsComponent implements OnInit {

  public superCars: SuperCarsInterface[] = []

  constructor(private superCarsService: SupercarsService) { }

  ngOnInit(): void {

    this.superCarsService.getAllSupercars().subscribe((data: any) =>{
      const apiSuperCars: SuperCarsInterface[] = data;

      const formattedsuperCars = apiSuperCars.map(({ _id, id, model, year, engine, hp, img}) => ({ _id, id,
      model, year, engine, hp, img
      }))
      this.superCars = formattedsuperCars
    })
  }
}
