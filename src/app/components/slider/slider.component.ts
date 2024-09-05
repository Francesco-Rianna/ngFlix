import { Component, Input, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../types/movie'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators' // Per filtrare gli eventi di navigazione
import { imagesBaseUrl } from '../../constants/imagez-size'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  // input definisce una proprietà in questo caso slides che viene passa i dati di movie
  @Input() slides: Movie[] = []
  isDetailPage = false // Per controllare se sei nella pagina dei dettagli

  constructor(
    private moviesServices: MoviesService,
    private router: Router
  ) {}

  movies$ = this.moviesServices.getMoviesByType('popular')

  ngOnInit() {
    // Controllo iniziale della rotta appena il componente viene creato
    this.checkIfDetailPage()

    // funzione per non rendere visibili le frecce nel caricamento
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkIfDetailPage()
      })
  }

  // Funzione che controlla se sei nella pagina dei dettagli
  checkIfDetailPage() {
    this.isDetailPage = this.router.url.includes('detail')
  }
  // funzione slide

  slideIndex = 0
  nextSlide() {
    this.slideIndex++
    this.movies$.subscribe((movies) => {
      if (this.slideIndex >= movies.length) {
        this.slideIndex = 0
      }
    })
  }

  previusSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex--
    }
  }

  imgUrl = imagesBaseUrl
}
