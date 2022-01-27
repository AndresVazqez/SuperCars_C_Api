import { Component, OnInit } from '@angular/core';
import { Hero } from './models/home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hero!: Hero;

  constructor() { 
    this.hero = {
      img: {
        src: "https://i.ibb.co/ZM7KDDp/david-leveque-esv-WH-ow-Wug-unsplash.jpg",
        alt: "Buggati Chiron"
      },
      title: "The Importance of the Bugatti Chiron in the Automotive World",
      description: `We’ve only recently published the fact that the production run for the legendary Bugatti Chiron
      is completely sold out, all 500 units have found a customer, some of them probably even sold to someone who already
      owned an earlier Chiron model or at least a Veyron, but let’s not forget...`,
    }

  }

  ngOnInit(): void {
  }

}
