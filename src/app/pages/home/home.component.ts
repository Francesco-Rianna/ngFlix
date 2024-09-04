import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private moviesServices: MoviesService) {}
  upcomingMovies$ = this.moviesServices.getMoviesByType('upcoming')
  topRatedMovies$ = this.moviesServices.getMoviesByType('top_rated')
}
