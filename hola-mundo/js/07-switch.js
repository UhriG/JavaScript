"use_stric";
//Switch

var edad = 25;
var imprime = "";

switch (edad) {
	case 18:
		imprime = "Mayor de edad";
		break;
	case 25:
		imprime = "Adulto";
		break;
	case 40:
		imprime = "Crisis de los 40";
		break;
	case 70:
		imprime = "Anciano";
		break;
	default:
		imprime = "Valor no válido";
		break;
}

console.log(imprime);
