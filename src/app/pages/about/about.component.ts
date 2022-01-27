import { Component, OnInit } from '@angular/core';
import { AboutInterface } from './models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public about!: AboutInterface;

  constructor() { 

    this.about = {

      img: {
        src: "https://i.ibb.co/Bfj1tKD/about.jpg",
        alt: "SuperCars"
      },
      title: "About Us",
      paragraph: `Supercars.net was started by Richard Owen and Daniel Guillamot in 1996. Together they put one of the first
       automotive pages on what was, at the time, a very spacious world wide web. In late 2015, a small team of dedicated
        “car nuts” took over and will hopefully continue to grow the community. 

      Since its inception, Supercars.net has offered complete coverage of international sports cars,
      from classic cars, unique car concepts that wowed us, hypercars that made us dream and to everything in between. The mission is to
      deliver this automotive information in a concise, organized and engaging manner at no cost to users.
      
      Supercars.net is built for the automotive enthusiast and sports car fan in mind. Obsessively covering the auto
      industry with the latest news, new car reviews, videos, high-quality photography and all other amazing things car-related.
      Supercars.net is your source for all things automotive.
      
      We couldn’t care less what lap time cars can do at the Nurburgring, or how much they weighs, or whether there are
      those who will typecast its driver. We want cars that are joyous to drive, purely for the sake of driving. We want
      escapism that if were brutally honest, probably won’t be possible much longer. For us, it is about an enjoyment,
      excitement and fascination with cars that deliver unique and precious driving experiences.
      
      Besides our website we also actively share content on social media and engage our fans to maintain an exceptional
      high level of engagement. Our key social networks include Facebook, Instagram and Pinterest.
      
      Supercars.net is part of the A07 Online Media automotive network, a collection of niche communities in the
      automotive and motorcycle space. If you are looking to reach passionate fans, then feel free to reach out about
      partnership opportunities.
      
      Contact us about partnerships, advertising or even becoming a contributor. If you want to submit a car, event or
      other article, just fill out our submission page. If you’re looking to reach our engaged readers, check out our advertising options.`
    }

  }

  ngOnInit(): void {
  }

}
