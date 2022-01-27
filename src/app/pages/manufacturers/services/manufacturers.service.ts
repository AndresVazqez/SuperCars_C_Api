import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ManufacturersService {

  //public manufacturersURl : string = 'http://localhost:3000/manufacturers';
  public manufacturersURl : string = 'https://super-cars-api.vercel.app/api/manufacturers';

  constructor(private httpClient: HttpClient) { }

  public getAllmanufacturers () {

    return this.httpClient.get(this.manufacturersURl)
  }


  public getManufacturers(idManufacturers: any) {

    return this.httpClient.get(`${this.manufacturersURl}/${idManufacturers}`)
  }




}
