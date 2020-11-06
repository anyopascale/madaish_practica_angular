import { ProductosService } from './services/productos.service';
import { InfoPaginaService } from './services/infoPagina.service';


import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'madaish-app';

  constructor (public _infoPagina: InfoPaginaService,
                public productosService : ProductosService){}


  
}
