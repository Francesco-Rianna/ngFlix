import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private moviesServices: MoviesService) {}
  upcomingMovies$ = this.moviesServices.getUpcomingrMovies()
  topRatedMovies$ = this.moviesServices.getTopRatedMovies()
}
