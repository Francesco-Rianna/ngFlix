import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss',
})
export class VideoEmbedComponent implements OnInit {
  @Input() key: string | null = null
  videoUrl: SafeResourceUrl = ''
  //Dom sanitizer rende sicuri gli url utilizzati
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // funzione per rendere sicuro l'url
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.key
    )
  }
}
