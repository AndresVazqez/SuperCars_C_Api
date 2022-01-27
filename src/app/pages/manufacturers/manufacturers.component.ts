import { Component, OnInit } from '@angular/core';
import { ManufacturesrsInterface } from './models/manufacturers';
import { ManufacturersService } from './services/manufacturers.service';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.scss']
})
export class ManufacturersComponent implements OnInit {

  public manufacturers : ManufacturesrsInterface [] = []

  constructor(private manufacturersService: ManufacturersService ) { }

  ngOnInit(): void {

    this.manufacturersService.getAllmanufacturers().subscribe((data: any) => {
      const apiManufacturers: ManufacturesrsInterface [] = data;

      const formattedManufacturers = apiManufacturers.map(({ _id, id, name, foundation, country, campus, logo}) => ({
       _id, id, name, foundation, country, campus, logo
      }))
      this.manufacturers = formattedManufacturers
    })
  }
}
