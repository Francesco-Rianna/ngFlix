import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { Movie } from '../../types/movie'
import { IMAGES_SIZES } from '../../constants/imagez-size'
import { Video } from '../../types/video'
@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = ''
  show$: Observable<Movie> | null = null
  showVideos$: Observable<Video[]> | null = null
  imagesSizes = IMAGES_SIZES
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  // ci prendiamo l'id del film che abbiamo grazie al servizio movies
  ngOnInit() {
    this.showId = this.router.snapshot.params['id']
    this.show$ = this.moviesService.getMovieById(this.showId)
    this.showVideos$ = this.moviesService.getMovieVideos(this.showId)
  }
}
