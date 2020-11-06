import { ProductosService } from './../../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
                public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
        .subscribe( params => {
          console.log(params['termino']);

          this.productoService.buscarProducto( params['termino'] );


        } );

  }

}
