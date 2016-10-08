import { Routes, RouterModule } from '@angular/router'

import { InicioComponent } from './components/inicio.component';
import { NosotrosComponent } from './components/nosotros.component';
import { ContactenosComponent } from './components/contactenos.component';
import { EmpleadosComponent } from './components/empleados.component';
import { EditarEmpleadoComponent } from './components/editar-empleado.component';
import { ProductosComponent } from './components/productos.component';

const appRoutes: Routes = [
  { path: '' , component: InicioComponent},
  { path: 'nosotros' , component: NosotrosComponent},
  { path: 'productos' , component: ProductosComponent},
  { path: 'contactenos' , component: ContactenosComponent},
  { path: 'empleado/:id' , component: EmpleadosComponent},
  { path: 'editar-empleado/:id' , component: EditarEmpleadoComponent},
  { path: 'nosotros' , component: NosotrosComponent},
  { path: '**', component: InicioComponent}
]

export const appRoutingProviders : any[] = [];

export const routing = RouterModule.forRoot(appRoutes);