"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ProductosService = (function () {
    function ProductosService(http) {
        this.http = http;
    }
    ProductosService.prototype.listaDeProductos = function () {
        return this.http.get('http://localhost:3030/productos')
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); })
            .catch(this.ocurrioUnError);
    };
    ProductosService.prototype.informacionProducto = function (_id) {
        var url = "http://localhost:3030/producto/" + _id;
        return this.http.get(url)
            .toPromise()
            .then(function (producto) { return producto.json(); });
    };
    ProductosService.prototype.ocurrioUnError = function (error) {
        console.error('Ocurrio un error', error);
        return Promise.reject(error.message || error);
    };
    ProductosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductosService);
    return ProductosService;
}());
exports.ProductosService = ProductosService;
//# sourceMappingURL=productos.service.js.map