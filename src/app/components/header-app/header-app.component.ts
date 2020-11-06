import { InfoPaginaService } from './../../services/infoPagina.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino:string ){

    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino])

    // console.log(termino)
  }

}
