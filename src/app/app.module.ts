import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DiagnosticoComponent } from './pages/diagnostico/diagnostico.component';
import { GribolabComponent } from './pages/gribolab/gribolab.component';
import { PruebaComponent } from './pages/diagnostico/prueba/prueba.component';
import { ResultadoComponent } from './pages/diagnostico/resultado/resultado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { GraficotipoComponent } from './pages/diagnostico/resultado/grafico/graficotipo/graficotipo.component';
import { GraficoimportanComponent } from './pages/diagnostico/resultado/grafico/graficoimportan/graficoimportan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficoAreaComponent } from './pages/diagnostico/prueba/grafico-area/grafico-area.component';
import { NgxWhastappButtonModule } from 'ngx-whatsapp-button';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    NavbarComponent,
    HomeComponent,
    DiagnosticoComponent,
    GribolabComponent,
    PruebaComponent,
    ResultadoComponent,
    GraficoAreaComponent,
    GraficotipoComponent,
    GraficoimportanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    NgxWhastappButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
