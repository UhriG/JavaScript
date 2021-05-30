import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.zapatillas = [
      new Zapatilla('Rebook classic', 3900, 'Rebook', 'Negro', true),
      new Zapatilla('Nike sport', 4200, 'Nike', 'Blanco', false),
      new Zapatilla('Adidas hunter', 2500, 'Adidas', 'Mostaza', true),
      new Zapatilla('DC Urban', 5700, 'DC', 'Gris', true),
      new Zapatilla('Adidas runner', 3500, 'Adidas', 'Negro', true),
    ];
  }

  getTexto() {
    return 'Hola mundo desde un servicio';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
