import { Component } from '@angular/core';
import { NavigatorInterface, FooterInterface } from './core/models/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  public navigator: NavigatorInterface[] = [

    {
      name: 'home',
      link: '/home',
    },
    {
      name: 'manufacturers',
      link: '/manufacturers',
    },
    {
      name: 'supercars',
      link: '/supercars',
    },
    {
      name: 'about',
      link: '/about',

    }
  ];
 
  public footer: FooterInterface = {

    powered: "Andrés Vázquez",
    from: "Upgrade-Hub"
  }
}

