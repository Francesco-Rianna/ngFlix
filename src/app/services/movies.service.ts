import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDto } from '../types/movie'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = '529c294d65945fb1d00328a50b68c6d5'
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    )
  }

  getUpcomingrMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`
    )
  }

  getTopRatedMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`
    )
  }
}
