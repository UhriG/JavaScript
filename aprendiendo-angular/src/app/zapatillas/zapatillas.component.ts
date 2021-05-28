import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public listado: string;
  public zapatillas: Array<Zapatilla>;
  public marcas!: string[];
  public color: string;
  public miMarca: string;
  constructor() {
    this.miMarca = 'Adidas';
    this.color = 'yellow';
    this.marcas = new Array();
    this.titulo = 'Componente de Zapatillas';
    this.listado = 'Listado de las zapatillas más populares';
    this.zapatillas = [
      new Zapatilla('Rebook classic', 3900, 'Rebook', 'Negro', true),
      new Zapatilla('Nike sport', 4200, 'Nike', 'Blanco', false),
      new Zapatilla('Adidas hunter', 2500, 'Adidas', 'Mostaza', true),
      new Zapatilla('DC Urban', 5700, 'DC', 'Gris', true),
      new Zapatilla('Adidas runner', 3500, 'Adidas', 'Negro', true),
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }
  getMarca() {
    alert(this.miMarca);
  }
  addMarca() {
    this.marcas.push(this.miMarca);
  }
  deleteMarca(indice: number) {
    //delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }
}
