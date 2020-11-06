import { Producto } from './../interfaces/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

constructor( private http : HttpClient ) { 
  
  this.cargarProductos();

}

private cargarProductos() {

  return new Promise ((resolve, reject) => {
    this.http.get('https://angular-madaish.firebaseio.com/productos_idx.json')
    .subscribe( ( resp : Producto[] ) => {
      this.productos = resp;
      this.cargando = false;
      resolve();
      



      
      // console.log(resp);
      // setTimeout(() => {
      //   this.cargando = false;
        
      // }, 1000);
    });
    
  });
  
  

}

getProducto(id: string){
  return  this.http.get( `https://angular-madaish.firebaseio.com/productos/${ id }.json` );
}


buscarProducto( termino: string ){

  if (this.productos.length === 0) {
    // Cargar productos
    this.cargarProductos().then( ()=>{
      // se Ejecuta despues de tener los productos
      // aplicamos el filtro
      this.filtrarProducos( termino );
    });
  } else {
    // Aplicar el filtro
    this.filtrarProducos( termino );
  }




  // this.productosFiltrado = this.productos.filter( producto =>{
  //   return true;
  // });

  // console.log(this.productosFiltrado)


}

  private filtrarProducos( termino: string ){


    // console.log( this.productos );
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {

        this.productosFiltrado.push( prod );
        
      } else {
        
      }

    });


  };

}
