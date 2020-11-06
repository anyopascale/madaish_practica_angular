import { InfoPaginaService } from '../../../services/infoPagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( public infoService : InfoPaginaService) { }

  ngOnInit() {
  }

}
