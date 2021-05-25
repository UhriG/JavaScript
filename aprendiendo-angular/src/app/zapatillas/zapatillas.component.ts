import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo!: string;
  public listado!: string;
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.titulo = 'Componente de Zapatillas';
    this.listado = 'Listado de las zapatillas más populares';
    this.zapatillas = [
      new Zapatilla('Rebook classic', 3900, 'Rebook', 'Negro', true),
      new Zapatilla('Nike sport', 4200, 'Nike', 'Blanco', true),
      new Zapatilla('DC Urban', 5700, 'DC', 'Gris', true),
      new Zapatilla('Adidas runner', 3500, 'Adidas', 'Negro', true),
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
  }
}
