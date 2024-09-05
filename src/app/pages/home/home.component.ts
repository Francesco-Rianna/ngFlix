import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { TvshowsService } from '../../services/tvshows.service'
import { map } from 'rxjs'
import { mapToMovies } from '../../types/tvshows'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private moviesServices: MoviesService,
    private tvshowsService: TvshowsService
  ) {}
  // variabili che richiamano le funzioni dove la stringa è il tipo che completa l'api e il numero è il filtro dei film che voglio ricevere dalla chiamata
  upcomingMovies$ = this.moviesServices.getMoviesByType('upcoming', 13)
  popularMovies$ = this.moviesServices.getMoviesByType('popular', 13)
  topRatedMovies$ = this.moviesServices.getMoviesByType('top_rated', 11)
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies))
}
