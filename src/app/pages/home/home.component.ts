import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: MoviesService) { }

  movies: Movie[]=[]
  ngOnInit(): void {
    this.service.getNowPlaying().subscribe(data=> this.movies = data)
    
  }

}
