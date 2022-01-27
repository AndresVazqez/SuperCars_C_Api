import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManufacturesrsInterface } from '../../models/manufacturers';
import { ManufacturersService } from '../../services/manufacturers.service';

@Component({
  selector: 'app-manufacturers-detail',
  templateUrl: './manufacturers-detail.component.html',
  styleUrls: ['./manufacturers-detail.component.scss']
})
export class ManufacturersDetailComponent implements OnInit {
  public manufacturer!: ManufacturesrsInterface;


  constructor(private activateRoute: ActivatedRoute, private manuFacturersService: ManufacturersService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      const idManufacturer = params.get('idManufacturer');

      this.manuFacturersService.getManufacturers(idManufacturer).subscribe((data: any) => {
        const apiManufacturers: ManufacturesrsInterface = data;

        this.manufacturer = apiManufacturers;
      })
      console.log(this.manufacturer)
    })
  }
}
