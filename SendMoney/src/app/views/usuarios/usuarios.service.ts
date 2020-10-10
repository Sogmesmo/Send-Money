import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
 
  usuario_Selecionado:  any


  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) { 
 
  }

   getDados(){
     return this.http.get(this.apiurl);
   }
    
   showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X',{
      duration:30000,
      horizontalPosition: "center",
      verticalPosition:"top",
     panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

   /*NomeUser(usuarios) {
       this.usuario_Selecionado = usuarios.name
      }
    
   public getUsuarioSelecionado(){
    return this.usuario_Selecionado;
 }
  
   public setUsuarioSelecionado(selecionado){
    return this.usuario_Selecionado = selecionado;
   }*/

   addpay(cards){
    return this.http.post(this.apiurl, cards)
  }
  
} 


