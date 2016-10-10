import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { ProductosService } from '../services/productos.service'

@Component({
  templateUrl: './app/views/crear-producto.component.html'
})

export class CrearProductoComponent {

    constructor(private route: ActivatedRoute,
                private productosService: ProductosService,
                private router: Router){}
    
    enviarFormulario(formulario) {
        this.productosService
            .crearProducto({formulario})
        console.log("Se ha creado un nuevo producto")
    }

    volver(){
        this.router.navigate(['/productos']);
    }
}