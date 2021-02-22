import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Movie } from 'src/app/interfaces/now-playing';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  @Input('movies')
  movies: Movie[] = []

  constructor(private service: MoviesService,
              private router: Router) { }


  @HostListener('window:scroll',['$event'] )
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300
    const max = (document.documentElement.scrollHeight || document.body.scrollTop)
    if(pos > max) {
      this.loadMovies()
    }
  }
  
  loadMovies() {
    this.service.getNowPlaying().subscribe((data:any) => this.movies.push(...data))
  }

  ngOnInit(): void {
  }

  onClick(movie: Movie) {
    console.log(movie)
    this.router.navigate(['movie', movie.id])
  }

}
