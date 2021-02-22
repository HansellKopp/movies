import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing';
import { Swiper }  from 'swiper'

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  public mySwiper?: Swiper;

  constructor() { }

  @Input('movies')
  movies?: Movie[]
  
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }
  onSlideNext(){
    this.mySwiper?.slideNext();
  }
  onSlidePrev(){
    this.mySwiper?.slidePrev();
  }

}


