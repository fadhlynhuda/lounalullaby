import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
slider: any;
    slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor() { }

 slideChange ()

  {
  this.slider.stopAutoplay();
  }

}
