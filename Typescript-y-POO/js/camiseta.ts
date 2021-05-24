// Interface
interface CamisetaBase {
	setColor(color: string): void;
	getColor(): string;
}

// Decorador
function estampar(logo: string) {
	return function (target: Function) {
		target.prototype.estamparLogo = function (): void {
			console.log("Camiseta estampada con el logo de " + logo);
		};
	};
}

// Clases (molde del objeto)

//Apicar decorador
@estampar("Adidas")
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
camiseta.estamparLogo();
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
