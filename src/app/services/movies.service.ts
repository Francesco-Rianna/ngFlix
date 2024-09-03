import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/tv?api_key=529c294d65945fb1d00328a50b68c6d5'
    )
  }
}
