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
  upcomingMovies$ = this.moviesServices.getMoviesByType('upcoming', 13)
  topRatedMovies$ = this.moviesServices.getMoviesByType('top_rated', 11)
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies))
}
