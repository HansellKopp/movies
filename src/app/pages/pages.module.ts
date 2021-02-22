import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from 'src/app/app-routing.module'
import { ComponentsModule } from '../components/components.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    
  ]
})
export class PagesModule { }
