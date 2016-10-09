import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { ProductosService } from '../services/productos.service'

@Component({
    templateUrl : '/app/views/detalle-producto.component.html'
})
export class DetalleProductoComponent {
    producto:Object;

    constructor(private route: ActivatedRoute,
                private productosService: ProductosService,
                private router: Router){}

    ngOnInit(){
        let _id = this.route.snapshot.params['_id'];
        this.productosService.informacionProducto(_id)
                            .then(producto => this.producto = producto);
    }

    volver(){
        this.router.navigate(['/productos']);
    }
}