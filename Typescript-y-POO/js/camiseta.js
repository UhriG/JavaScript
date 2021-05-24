"use strict";
// Clases (molde del objeto)
var Camiseta = /** @class */ (function () {
    // Constructor
    function Camiseta(color, modelo, marca, talle, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }
    // Metodos (fuciones u acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "Manga corta", "Vans", "XXL", 700);
camiseta.setColor("Verde");
// console.log(camiseta);
