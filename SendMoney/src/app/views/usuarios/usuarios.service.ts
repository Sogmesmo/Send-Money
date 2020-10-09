import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface TransactionPayload {
  card_number: string,
  cvv: number,
  expired_date: string,
  destination_user_id: number,
  value: number,
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private apiUrl = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce"
  showModal: Observable<boolean> 
  private showSubject: Subject<boolean> 
  usuario_Selecionado: any
  usuario: TransactionPayload


  constructor(private http: HttpClient) { 

      this.showSubject = new Subject<boolean>();
      this.showModal = this.showSubject.asObservable();
      this.showSubject.next(false);
  }

   getDados(){
     return this.http.get(this.apiUrl);
   }
   mudarValor(valor, item) {
    this.showSubject.next(valor)
    console.log("mudarvalor")
    this.usuario_Selecionado = item.name
    return valor
  } 
  getshowModal(){
    return this.showModal 
  }
  
  public getUsuarioSelecionado(){
    return this.usuario_Selecionado;
  }

  public setUsuarioSelecionado(selecionado){
    return this.usuario_Selecionado = selecionado;
  }

  
  paypoint(usuario){
    let endpoint = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989"  
     
    return this.http.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", usuario)
  }
}  
