import { ProductosService } from './../../../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor( public productosService : ProductosService ) { }

  ngOnInit() {
  }

}
