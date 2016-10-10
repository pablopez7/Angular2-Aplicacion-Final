"use strict";
var router_1 = require('@angular/router');
var inicio_component_1 = require('./components/inicio.component');
var nosotros_component_1 = require('./components/nosotros.component');
var contactenos_component_1 = require('./components/contactenos.component');
var empleados_component_1 = require('./components/empleados.component');
var editar_empleado_component_1 = require('./components/editar-empleado.component');
var productos_component_1 = require('./components/productos.component');
var detalle_producto_component_1 = require('./components/detalle-producto.component');
var crear_producto_component_1 = require('./components/crear-producto.component');
var appRoutes = [
    { path: '', component: inicio_component_1.InicioComponent },
    { path: 'nosotros', component: nosotros_component_1.NosotrosComponent },
    { path: 'productos', component: productos_component_1.ProductosComponent },
    { path: 'crear-producto', component: crear_producto_component_1.CrearProductoComponent },
    { path: 'detalle-producto/:_id', component: detalle_producto_component_1.DetalleProductoComponent },
    { path: 'contactenos', component: contactenos_component_1.ContactenosComponent },
    { path: 'empleado/:id', component: empleados_component_1.EmpleadosComponent },
    { path: 'editar-empleado/:id', component: editar_empleado_component_1.EditarEmpleadoComponent },
    { path: '**', component: inicio_component_1.InicioComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map