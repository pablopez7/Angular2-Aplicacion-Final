import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductosService {

    constructor(private http: Http) { }

    listaDeProductos() {
        return this.http.get('http://localhost:3030/productos')
            .toPromise()
            .then(respuesta => respuesta.json())
            .catch(this.ocurrioUnError);
    }

    informacionProducto(_id: string) {
        let url = `http://localhost:3030/producto/${_id}`;
        return this.http.get(url)
            .toPromise()
            .then(producto => producto.json());
    }

    crearProducto(producto: any) {
        let nuevoProducto = JSON.stringify(producto)
        return this.http.post('http://localhost:3030/producto', nuevoProducto)
        .toPromise()
        .then(respuesta => console.log(respuesta))
    }

    private ocurrioUnError(error: any) {
        console.error('Ocurrio un error', error);
        return Promise.reject(error.message || error);
    }
}