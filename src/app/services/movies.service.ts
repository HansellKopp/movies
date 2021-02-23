import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { NowPlaying, Movie } from 'src/app/interfaces/now-playing'
import { MovieDetails } from '../interfaces/movie-details';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  page=1
  loading=false
  baseUrl = 'https://api.themoviedb.org/3'
  apiKey  = environment.apiKey
  constructor(private http: HttpClient) { }

  get params() { 
  return {
    api_key: this.apiKey,
    language:'en-US',
    sort_by:'popularity.desc',
    include_adult:'false',
    include_video: 'false',
    page: this.page.toString()
  }
  }
  getNowPlaying(): Observable<Movie[]> {
    if(this.loading) {
      return of([])
    }
    this.loading=true
    return this.http.get<NowPlaying>(`${this.baseUrl}/movie/now_playing`,{ params: this.params})
                    .pipe(
                      map((resp) => resp.results),
                      tap(()=> { 
                      this.page += 1
                      this.loading=false
                    }))
  }

  search(query: string): Observable<Movie[]> {
    const p = {...this.params, query: query, page: "1"}
    return this.http.get<NowPlaying>(`${this.baseUrl}/search/movie`,{ params: p})
                    .pipe(map((resp) => resp.results))

  }

  resetPage() {
    this.page=1
  }

  movieDetails(id: string): Observable<MovieDetails> {
    const p = {
      api_key: this.apiKey
    }
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`,{ params: p})
                    .pipe(map((resp) => resp))
  }

  movieCredits(id: string): Observable<any> {
    const p = {
      api_key: this.apiKey
    }
    return this.http.get<any>(`${this.baseUrl}/movie/${id}/credits`,{ params: p})
                    .pipe(map((resp) => resp.results))
  }

}
