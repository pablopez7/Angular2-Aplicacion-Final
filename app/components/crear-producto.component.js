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
var router_1 = require('@angular/router');
var productos_service_1 = require('../services/productos.service');
var CrearProductoComponent = (function () {
    function CrearProductoComponent(route, productosService, router) {
        this.route = route;
        this.productosService = productosService;
        this.router = router;
    }
    CrearProductoComponent.prototype.enviarFormulario = function (formulario) {
        this.productosService
            .crearProducto({ formulario: formulario });
        console.log("Se ha creado un nuevo producto");
    };
    CrearProductoComponent.prototype.volver = function () {
        this.router.navigate(['/productos']);
    };
    CrearProductoComponent = __decorate([
        core_1.Component({
            templateUrl: './app/views/crear-producto.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, productos_service_1.ProductosService, router_1.Router])
    ], CrearProductoComponent);
    return CrearProductoComponent;
}());
exports.CrearProductoComponent = CrearProductoComponent;
//# sourceMappingURL=crear-producto.component.js.map