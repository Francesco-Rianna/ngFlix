import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { subscribe } from 'diagnostics_channel'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get(
        'https://api.themoviedb.org/3/discover/tv?api_key=529c294d65945fb1d00328a50b68c6d5'
      )
      .subscribe((data) => {
        console.log(data)
      })
  }
}
