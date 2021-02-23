import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/app/interfaces/credits';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  id: string = ''
  movie?: MovieDetails
  credits?: Credits
  constructor(
    private activeRoute: ActivatedRoute,
    private service: MoviesService,
    private location: Location
    ) { 
    this.id = activeRoute.snapshot.params['id']
    this.loadMovie()
  }

  ngOnInit(): void {
  }

  loadMovie() {
    this.service.movieDetails(this.id).subscribe(
      data=> {
        this.movie=data
        this.service.movieCredits(this.id).subscribe(
          credits=> this.credits=credits
        )
      }
    )
  }

  onGoBack() {
    this.location.back()
  }
}
