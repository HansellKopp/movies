import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from 'src/app/interfaces/credits';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.scss']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast?: Cast[]=[];
  public mySwiper?: Swiper;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('#swiper', {
      freeMode: true,
      autoHeight: true,
      slidesPerView: 5.5,
      spaceBetween: 25,
    });
  }

}