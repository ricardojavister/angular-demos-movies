import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  VgBufferingModule,
  VgControlsModule,
  VgCoreModule,
  VgOverlayPlayModule,
} from 'ngx-videogular';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoBasicComponent } from './components/video-basic/video-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoContainerComponent,
    NavbarComponent,
    VideoPlayerComponent,
    VideoBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
