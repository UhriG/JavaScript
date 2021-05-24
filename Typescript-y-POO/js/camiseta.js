"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log(camiseta);
// Herencia
// Clase hija
var Campera = /** @class */ (function (_super) {
    __extends(Campera, _super);
    function Campera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Campera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Campera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Campera;
}(Camiseta));
var campera = new Campera("Negro", "Estampada", "Adidas", "XXL", 1900);
campera.setCapucha(true);
console.log(campera);
