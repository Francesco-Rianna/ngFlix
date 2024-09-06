import { NgModule } from '@angular/core'
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { MovieListComponent } from './pages/movie-list/movie-list.component'
import { SliderComponent } from './components/slider/slider.component'
import { HttpClientModule } from '@angular/common/http'
import { BannerComponent } from './components/banner/banner.component'
import { ShowItemComponent } from './components/show-item/show-item.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { TabViewModule } from 'primeng/tabview'
import { VideoEmbedComponent } from './components/video-embed/video-embed.component'
import { ImageModule } from 'primeng/image'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieListComponent,
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
    ShowDetailComponent,
    VideoEmbedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabViewModule,
    ImageModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
