import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperCarsInterface } from '../../models/supercars';
import { SupercarsService } from '../../service/supercars.service';

@Component({
  selector: 'app-supercars-detail',
  templateUrl: './supercars-detail.component.html',
  styleUrls: ['./supercars-detail.component.scss']
})
export class SupercarsDetailComponent implements OnInit {
  public superCar!: SuperCarsInterface;

  constructor(private activateRoute: ActivatedRoute, private superCarsService: SupercarsService) { }

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((params) => {
      const idSuperCar = params.get('idSuperCar');

      this.superCarsService.getSuperCars(idSuperCar).subscribe((data: any) => {
        const apiSuperCars: SuperCarsInterface = data;

        this.superCar = apiSuperCars;
      })
    })
  }
}