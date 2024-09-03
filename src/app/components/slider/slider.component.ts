import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  constructor(private moviesServices: MoviesService) {}
  movies$ = this.moviesServices.getPopularMovies()
}
