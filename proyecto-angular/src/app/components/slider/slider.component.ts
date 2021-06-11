import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() width!: number;
  @Output() getAutor = new EventEmitter();

  public autor: any;
  constructor() {
    this.autor = {
      nombre: 'Cristian Uhrig',
      website: 'cristianuhrig.com',
      youtube: 'CristianUhrig',
    };
  }

  ngOnInit(): void {
    $('header').css('background', 'green');

    (<any>$('.bxslider')).bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.width,
    });
    this.getAutor.emit(this.autor);
  }

  sendAutor(event: any) {
    this.getAutor.emit(this.autor);
  }
}
