// Clases (molde del objeto)
class Camiseta {
	// Propiedades (caracteristicas del objeto)
	private color!: string;
	private modelo!: string;
	private marca!: string;
	private talle!: string;
	private precio!: number;

	// Constructor
	constructor(
		color: string,
		modelo: string,
		marca: string,
		talle: string,
		precio: number
	) {
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talle = talle;
		this.precio = precio;
	}

	// Metodos (fuciones u acciones del objeto)
	public setColor(color: string) {
		this.color = color;
	}

	public getColor() {
		return this.color;
	}
}
var camiseta = new Camiseta("Rojo", "Manga corta", "Vans", "XXL", 700);

camiseta.setColor("Verde");

console.log(camiseta);
