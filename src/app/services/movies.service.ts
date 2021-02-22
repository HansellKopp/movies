import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { NowPlaying, Movie } from 'src/app/interfaces/now-playing'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  page=1
  loading=false
  baseUrl = 'https://api.themoviedb.org/3'
  constructor(private http: HttpClient) { }

  get params() { 
  return {
    api_key: '0f0a409f0dd5a60c3e77a42d88d8cfd7',
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
                    .pipe(
                      map((resp) => resp.results),
                      tap(()=> { 
                    }))

  }

  resetPage() {
    this.page=1
  }

  movieDetails(id: string) {

  }
}
