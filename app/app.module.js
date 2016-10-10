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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var empleados_service_1 = require('./services/empleados.service');
var productos_service_1 = require('./services/productos.service');
var inicio_component_1 = require('./components/inicio.component');
var nosotros_component_1 = require('./components/nosotros.component');
var contactenos_component_1 = require('./components/contactenos.component');
var empleados_component_1 = require('./components/empleados.component');
var editar_empleado_component_1 = require('./components/editar-empleado.component');
var productos_component_1 = require('./components/productos.component');
var detalle_producto_component_1 = require('./components/detalle-producto.component');
var crear_producto_component_1 = require('./components/crear-producto.component');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent,
                inicio_component_1.InicioComponent,
                nosotros_component_1.NosotrosComponent,
                empleados_component_1.EmpleadosComponent,
                editar_empleado_component_1.EditarEmpleadoComponent,
                productos_component_1.ProductosComponent,
                detalle_producto_component_1.DetalleProductoComponent,
                crear_producto_component_1.CrearProductoComponent,
                contactenos_component_1.ContactenosComponent,],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, empleados_service_1.EmpleadoService, productos_service_1.ProductosService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map