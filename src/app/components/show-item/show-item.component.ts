import { Component, Input } from '@angular/core'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null
  imgUrl = 'https://image.tmdb.org/t/p/w500/'
}
