import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ng-starrating';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component'

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, MoviesGridComponent, CastSlideshowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesGridComponent,
    CastSlideshowComponent
  ]
})
export class ComponentsModule { }
