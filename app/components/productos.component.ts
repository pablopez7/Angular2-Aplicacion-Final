import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ProductosService } from '../services/productos.service'

@Component({
  templateUrl : '/app/views/productos.component.html'
})

export class ProductosComponent implements OnInit {
    productos:Array<Object>;

    private selectedNombre: string;

    constructor(
        private productosService: ProductosService,
        private router: Router) {  }
        
    listaDeProductos(){
        this.productosService.listaDeProductos()
                            .then(productos => this.productos = productos);    
    }

    ngOnInit() {
        this.listaDeProductos();
    }

    clickEnProducto(producto) {
        this.router.navigate(['/detalle-producto', producto.nombre]);
    }
}