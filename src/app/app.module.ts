//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


//Module
import { AppComponent } from './app.component';


//Component
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { FooterAppComponent } from './components/footer-app/footer-app.component';
import { ErrorComponent } from './components/404/error.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LegalComponent } from './components/legal/legal.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { DetalleProductoComponent } from './components/pages/detalleProducto/detalleProducto.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { SearchComponent } from './components/pages/search/search.component';




const routes: Routes = [
  {path:'', component: MainComponent },
  {path:'contact', component: ContactComponent },
  {path:'about', component: AboutComponent },
  {path:'legal', component: LegalComponent },
  {path:'faqs', component: FaqsComponent },
  {path:'producto/:id', component: DetalleProductoComponent },
  {path:'productos', component: ProductosComponent },
  {path:'search/:termino', component: SearchComponent },
  {path:'**', component: ErrorComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    FooterAppComponent,
    ErrorComponent,
    MainComponent,
    ContactComponent,
    AboutComponent,
    LegalComponent,
    FaqsComponent,
    DetalleProductoComponent,
    ProductosComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {
  
 }


export class AppRoutingModule {}