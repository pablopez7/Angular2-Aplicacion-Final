"use strict";
var router_1 = require('@angular/router');
var inicio_component_1 = require('./inicio.component');
var nosotros_component_1 = require('./nosotros.component');
var contactenos_component_1 = require('./contactenos.component');
var empleados_component_1 = require('./empleados.component');
var appRoutes = [
    { path: '', component: inicio_component_1.InicioComponent },
    { path: 'nosotros', component: nosotros_component_1.NosotrosComponent },
    { path: 'contactenos', component: contactenos_component_1.ContactenosComponent },
    { path: 'empleado/:id', component: empleados_component_1.EmpleadosComponent },
    { path: '**', component: inicio_component_1.InicioComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map