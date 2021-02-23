import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits';
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
  cast?: Cast[]
  constructor(
    private activeRoute: ActivatedRoute,
    private service: MoviesService,
    private location: Location,
    private router: Router
    ) { 
    this.id = this.activeRoute.snapshot.params['id']
  }
  
  ngOnInit(): void {
    let movie = this.service.movieDetails(this.id)
    let cast = this.service.movieCredits(this.id)
    forkJoin([movie, cast])
    .subscribe(results => {
      this.movie=results[0]
      if(!this.movie.id) {
         this.router.navigate(['home'])
      }
      this.cast=results[1].filter(person=> person.profile_path)
    })
    

  }

  onGoBack() {
    this.location.back()
  }
}
