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
var empleados_service_1 = require('../services/empleados.service');
var EditarEmpleadoComponent = (function () {
    function EditarEmpleadoComponent(route, empleadoservice, router) {
        this.route = route;
        this.empleadoservice = empleadoservice;
        this.router = router;
    }
    EditarEmpleadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.empleadoservice.informacionEmpleado(id)
            .then(function (empleado) { return _this.empleado = empleado; });
    };
    EditarEmpleadoComponent.prototype.volver = function () {
        this.router.navigate(['/nosotros']);
    };
    EditarEmpleadoComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/views/editar-empleado.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, empleados_service_1.EmpleadoService, router_1.Router])
    ], EditarEmpleadoComponent);
    return EditarEmpleadoComponent;
}());
exports.EditarEmpleadoComponent = EditarEmpleadoComponent;
//# sourceMappingURL=editar-empleado.component.js.map