import { Component } from '@angular/core';
import { Configuracion } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title;
  public description;
  public config;
  public mostrarVideojuegos: boolean = true;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.description = Configuracion.descripcion;
  }

  ocultarVideojuegos(value: boolean) {
    this.mostrarVideojuegos = value;
  }
}
