import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  constructor(private moviesServices: MoviesService) {}
  movies$ = this.moviesServices.getPopularMovies()
  slideIndex = 0
  nextSlide() {
    this.slideIndex++
    this.movies$.subscribe((movies) => {
      if (this.slideIndex >= movies.results.length) {
        this.slideIndex = 0
      }
    })
  }
  previusSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex--
    }
  }

  imgUrl = 'https://image.tmdb.org/t/p/w500/'
}
