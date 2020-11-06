import { ProductoDescripcion } from './../../../interfaces/producto-descripcion';
import { ProductosService } from './../../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleProducto',
  templateUrl: './detalleProducto.component.html',
  styleUrls: ['./detalleProducto.component.scss']
})
export class DetalleProductoComponent implements OnInit {


  producto: ProductoDescripcion;
  id: string;


  constructor( private route : ActivatedRoute,
                public productoService: ProductosService ) { }

  ngOnInit() {


    this.route.params
      .subscribe( parametros => {
        // console.log(parametros['id']);

        this.productoService.getProducto(parametros['id'])
            .subscribe( (Producto: ProductoDescripcion) => {
              console.log(Producto);
              this.id = parametros['id'];
              this.producto = Producto;
              
            });

       
          });



    }

}
