import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public widthSlider!: number;
  public widthToSlider!: number;
  public autor: any;
  @ViewChild('#textos') textos: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.textos.nativeElement.textContent);
  }

  cargarSlider() {
    this.widthToSlider = this.widthSlider;
  }
  resetSlider() {
    this.widthToSlider = 0;
  }
  getAutor(event: any) {
    this.autor = event;
  }
}
