import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-dashboardmain',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('swipeCard', { static: true }) swipeCard!: ElementRef;

  constructor() { }


  // ngAfterViewInit(): void {
  //   const swipeCard = this.swipeCard.nativeElement;

  //   const hammertime = new Hammer(swipeCard);
  //   hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  //   hammertime.on('pan', (event) => {
  //     swipeCard.style.transform = `translateX(${event.deltaX}px)`;
  //   });

  //   hammertime.on('panend', (event) => {
  //     if (event.deltaX > 150) {
  //       // swipe right
  //       swipeCard.style.transform = 'translateX(1000px)';
  //       // add your swipe right code here
  //     } else if (event.deltaX < -150) {
  //       // swipe left
  //       swipeCard.style.transform = 'translateX(-1000px)';
  //       // add your swipe left code here
  //     } else {
  //       // reset card position
  //       swipeCard.style.transform = '';
  //     }
  //   });

  // }
}
