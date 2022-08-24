import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public github: string = 'https://github.com/Hideki-Goulart';
  public linkedin: string = 'https://www.linkedin.com/in/felipe-goulart-a6a759152/';

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
