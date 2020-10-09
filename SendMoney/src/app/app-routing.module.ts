import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsuariosComponent } from'./views/usuarios/usuarios.component'
import { ModalComponent } from './views/modal/modal/modal.component'

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
 },
 {
   path: "usuarios",
   component: UsuariosComponent
 },
 {
  path: "modal",
  component: ModalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
