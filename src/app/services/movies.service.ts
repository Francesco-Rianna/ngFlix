import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDto } from '../types/movie'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=529c294d65945fb1d00328a50b68c6d5'
    )
  }

  getUpcomingrMovies() {
    return this.http.get<MoviesDto>(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=529c294d65945fb1d00328a50b68c6d5'
    )
  }
}
