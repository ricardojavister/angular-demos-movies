import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-basic',
  templateUrl: './video-basic.component.html',
  styleUrls: ['./video-basic.component.scss'],
})
export class VideoBasicComponent implements OnInit {
  @Input() source = 'http://techslides.com/demos/sample-videos/small.mp4';
  @Input() id!: string;
  @ViewChild('media') media!: ElementRef<HTMLVideoElement>;

  constructor() {}

  ngOnInit(): void {
    console.log(this.media);
  }

  onmouseover(): void {
    let element = this.media.nativeElement;
    element.play();
  }

  onmouseout(): void {
    let element = this.media.nativeElement;
    element.pause();
  }
}
