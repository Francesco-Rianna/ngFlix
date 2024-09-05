import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Movie, MoviesDto } from '../types/movie'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = '529c294d65945fb1d00328a50b68c6d5'
  constructor(private http: HttpClient) {}
  // funzione che prende i film per tipo dove type è flessibile per il tipo di api ricevuta *guarda componente home.component.ts
  // riga 17 pipe map funzione che filtra la chiamata per numero dove count è la variabile inserita nel componente home.component
  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    )
  }
}
