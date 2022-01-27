import { Component, OnInit, Input } from '@angular/core';
import { NavigatorInterface, Image } from '../../models/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @Input() navigator!: NavigatorInterface[];

  public darkMode: boolean = true;
  public btnText: string = "DarkTheme"
  public darkImg: Image;
  public lightImg : Image;
  

  
  constructor() {

    this.darkImg = {
      src: 'https://i.ibb.co/9WXq2Yv/night-mode.png',
      alt: "modeDark"    
    };
    
    this.lightImg = {
      src : 'https://i.ibb.co/MPD4Qgd/solid-black-sun-symbol.png',
      alt : "modeLight"
    }
    
   }

   
  ngOnInit(): void {
  }


  public setDarkMode (): void {
    !this.darkMode ? this.darkMode = true : this.darkMode = false;   
    this.darkImg.src == "https://i.ibb.co/9WXq2Yv/night-mode.png" ? this.darkImg.src = "https://i.ibb.co/MPD4Qgd/solid-black-sun-symbol.png": this.darkImg.src = "https://i.ibb.co/9WXq2Yv/night-mode.png";    
    document.body.classList.toggle("darkMode");    
  }

}
