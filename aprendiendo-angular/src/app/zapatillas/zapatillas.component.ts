import { Component } from '@angular/core';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent {
  public titulo!: string;
  public listado!: string;
  constructor() {
    this.titulo = 'Componente de Zapatillas';
    this.listado = 'Listado de las zapatillas más populares';
  }
}
