import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover={
    cover:'https://media.es.wired.com/photos/6442dda9a566376ee967ba15/16:9/w_2560%2Cc_limit/The-Sludgification-Of-Music-Business-503493283.jpg',
    name:'Saca',
    album:'Veve oficial'
  }
}
