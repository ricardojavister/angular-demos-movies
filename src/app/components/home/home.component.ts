import { Component, OnInit } from '@angular/core';
import { clip } from 'src/app/interfaces/clip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public source = 'assets/vids/passengers.mkv';
  public dramaclips!: clip[];
  public comedyclips!: clip[];
  public kidsclips!: clip[];
  public clips: clip[] = [
    {
      id: 1,
      name: 'Megamind',
      url: 'assets/vids/megamind.mkv',
      category: 'drama',
    },
    {
      id: 2,
      name: 'Everyone-is-Fine',
      url: 'assets/vids/everyoneisfine.mkv',
      category: 'drama',
    },
    {
      id: 3,
      name: 'Turbo',
      url: 'assets/vids/turbo-clip.mkv',
      category: 'kids',
    },
    {
      id: 4,
      name: 'Sonic-2',
      url: 'assets/vids/sonic2-clip.mkv',
      category: 'kids',
    },
    {
      id: 5,
      name: 'Passengers',
      url: 'assets/vids/passengers.mkv',
      category: 'drama',
    },
    {
      id: 6,
      name: 'Neverending Story',
      url: 'assets/vids/neverending-story-clip.mkv',
      category: 'kids',
    },
    {
      id: 7,
      name: 'Growns-Up',
      url: 'assets/vids/growns-up-clip.mkv',
      category: 'comedy',
    },
    {
      id: 8,
      name: 'Minions',
      url: 'assets/vids/minions-1-clip.mkv',
      category: 'kids',
    },
    {
      id: 9,
      name: 'Top-Gun',
      url: 'assets/vids/top-gun-clip.mkv',
      category: 'drama',
    },
    {
      id: 10,
      name: 'Liar Liar',
      url: 'assets/vids/liar-liar.mkv',
      category: 'comedy',
    },
    {
      id: 9,
      name: 'Click',
      url: 'assets/vids/click.mkv',
      category: 'comedy',
    },
    {
      id: 10,
      name: 'Mask',
      url: 'assets/vids/mask.mkv',
      category: 'comedy',
    },
  ];

  constructor() {}
  ngOnInit(): void {
    this.dramaclips = this.clips.filter((x) => x.category == 'drama');
    this.comedyclips = this.clips.filter((x) => x.category == 'comedy');
    this.kidsclips = this.clips.filter((x) => x.category == 'kids');
  }
}
