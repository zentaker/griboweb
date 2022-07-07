import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DiagnosticoComponent } from './pages/diagnostico/diagnostico.component';
import { PruebaComponent } from './pages/diagnostico/prueba/prueba.component';
import { ResultadoComponent } from './pages/diagnostico/resultado/resultado.component';
import { GribolabComponent } from './pages/gribolab/gribolab.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent },
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'diagnostico', component: DiagnosticoComponent},
  {path: 'gribolab',component: GribolabComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
