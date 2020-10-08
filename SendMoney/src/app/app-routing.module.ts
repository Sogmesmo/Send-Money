import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsuariosComponent } from'./views/usuarios/usuarios.component'

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
 },
 {
   path: "usuarios",
   component: UsuariosComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
