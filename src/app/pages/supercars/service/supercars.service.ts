import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class SupercarsService {
  //public superCarsUrl: string = 'http://localhost:3000/supercars';
  public superCarsUrl: string = 'https://super-cars-api.vercel.app/api/supercars';

  constructor(private httpClient: HttpClient) { }

  public getAllSupercars() {
    return this.httpClient.get(this.superCarsUrl)
  }

  public getSuperCars(idSuperCars: any) {
    return this.httpClient.get(`${this.superCarsUrl}/${idSuperCars}` )
  }
}
