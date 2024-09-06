import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss',
})
export class ShowListComponent implements OnInit {
  showsList$: Observable<Movie[]> | null = null
  // variabile per l'input inizializzata stringa vuota
  searchValue = ''
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.showsList$ = this.moviesService.searchMovies(1, this.searchValue)
  }

  searchChanged() {
    console.log(this.searchValue)
  }
}
