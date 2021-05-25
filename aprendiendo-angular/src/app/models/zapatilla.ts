export class Zapatilla {
  /* public nombre: string;
  public precio: number;
  public marca: string;
  public color: string;
  public stock: boolean;

  constructor(nombre, marca, precio, color, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
  }*/

  // Esto es lo mismo que lo de arriba
  constructor(
    public nombre: string,
    public precio: number,
    public marca: string,
    public color: string,
    public stock: boolean
  ) {}
}
