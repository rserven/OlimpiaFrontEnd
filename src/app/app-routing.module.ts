import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarComponent } from './olimpia/registrar/registrar.component';
import { GraficoComponent } from './olimpia/grafico/grafico.component';
import { EliminarComponent } from './olimpia/eliminar/eliminar.component';


const routes: Routes = [
  {path: '', component: GraficoComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'grafico', component: GraficoComponent},
  {path: 'eliminar', component: EliminarComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
