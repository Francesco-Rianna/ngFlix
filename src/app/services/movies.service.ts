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
  getMoviesByType(type: string) {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
    )
  }
}
