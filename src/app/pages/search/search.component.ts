import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/now-playing';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: string= ''
  movies: Movie[]=[]
  constructor(
    private activeRoute: ActivatedRoute, 
    private service: MoviesService
  ) {
    activeRoute.params.subscribe(data=> {
      this.searchTerm=data['term']
      this.service.search(this.searchTerm).subscribe(data=> this.movies=data)
    })
   }

  ngOnInit(): void {
  }

}
