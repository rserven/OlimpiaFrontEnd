import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown'
import {LeafletModule} from '@asymmetrik/ngx-leaflet'
import "leaflet/dist/images/marker-shadow.png";

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { FormularioHinchaComponent } from './olimpia/formulario-hincha/formulario-hincha.component';
import { RegistrarComponent } from './olimpia/registrar/registrar.component';
import { MostrarErroresComponent } from './olimpia/mostrar-errores/mostrar-errores.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficoComponent } from './olimpia/grafico/grafico.component';
import { EliminarComponent } from './olimpia/eliminar/eliminar.component';
import { FormularioEliminarComponent } from './olimpia/formulario-eliminar/formulario-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,   
    MenuComponent, 
    FormularioHinchaComponent, 
    RegistrarComponent, 
    MostrarErroresComponent, 
    GraficoComponent, EliminarComponent, FormularioEliminarComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,  
    HttpClientModule,  
    NgxChartsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
