import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  hideCard:boolean = true;
  imagesrc:string = '';
  closeCard(eventInfo:MouseEvent){
    if(eventInfo.target == eventInfo.currentTarget){
      this.hideCard = true;
    }
  }
  showCard(eventInfo:MouseEvent , image:string){
    this.hideCard = false;
    this.imagesrc = image;
  }
}
