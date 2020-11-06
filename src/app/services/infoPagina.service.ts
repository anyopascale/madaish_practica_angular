import { InfoPagina } from './../interfaces/infoPagina-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any[];
  infoPagina: any[];

  constructor(private http: HttpClient){
    this.cargarInfo();

    this.cargarEquipo();
    
    this.cargarInfoPagina();


  }

  private cargarInfo() {
    // console.log('servicio de infopagina listo')

    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) =>{
          this.cargada = true;
          this.info = resp;
          // console.log(resp);
        });
  }

  private cargarEquipo() {
    this.http.get('https://angular-madaish.firebaseio.com/equipo.json')
        .subscribe( (resp: any[]) =>{
          this.equipo = resp;
          // console.log(resp);
        });
  }

  private cargarInfoPagina() {
    this.http.get('https://angular-madaish.firebaseio.com/datos_pagina.json')
        .subscribe( (resp: any[]) =>{
          this.infoPagina = resp;
          // console.log(resp);
        });
  }

  //Leer el archivo JSON

}
