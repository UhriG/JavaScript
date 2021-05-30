import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService],
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public listado: string;
  public zapatillas!: Array<Zapatilla>;
  public marcas!: string[];
  public color: string;
  public miMarca: string;
  constructor(private _zapatillaService: ZapatillaService) {
    this.miMarca = 'Adidas';
    this.color = 'yellow';
    this.marcas = new Array();
    this.titulo = 'Componente de Zapatillas';
    this.listado = 'Listado de las zapatillas más populares';
  }
  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas();
    console.log(this.zapatillas);
    console.log(this._zapatillaService.getTexto());
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
  onBlur() {
    console.log('Has salido del input');
  }
  onKeyUp() {
    console.log('Has presionado la tecla enter');
  }
}
