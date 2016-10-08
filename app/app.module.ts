import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { routing, appRoutingProviders } from './app.routing';
import { EmpleadoService } from './services/empleados.service'
import { ProductosService } from './services/productos.service'

import { InicioComponent } from './components/inicio.component';
import { NosotrosComponent } from './components/nosotros.component';
import { ContactenosComponent } from './components/contactenos.component';
import { EmpleadosComponent } from './components/empleados.component';
import { EditarEmpleadoComponent } from './components/editar-empleado.component';
import { ProductosComponent } from './components/productos.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, 
                  InicioComponent,
                  NosotrosComponent,
                  ContactenosComponent,
                  EmpleadosComponent,
                  EditarEmpleadoComponent,
                  ProductosComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders, EmpleadoService, ProductosService ]
})
export class AppModule { }
