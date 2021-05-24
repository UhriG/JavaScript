// Interface
interface CamisetaBase {
	setColor(color: string): void;
	getColor(): string;
}

// Clases (molde del objeto)
class Camiseta implements CamisetaBase {
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

// Herencia
// Clase hija
class Campera extends Camiseta {
	public capucha!: boolean;

	setCapucha(capucha: boolean) {
		this.capucha = capucha;
	}

	getCapucha(): boolean {
		return this.capucha;
	}
}

var campera = new Campera("Negro", "Estampada", "Adidas", "XXL", 1900);
campera.setCapucha(true);
console.log(campera);
