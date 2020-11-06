import { InfoPaginaService } from './../../services/infoPagina.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.scss']
})
export class FooterAppComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public infoPaginaService: InfoPaginaService) { }

  ngOnInit() {
  }

}
