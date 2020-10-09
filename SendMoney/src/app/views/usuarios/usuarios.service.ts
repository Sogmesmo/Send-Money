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
 

  constructor(private http: HttpClient) { 

      
  }

   getDados(){
     return this.http.get(this.apiUrl);
   }
  
}  
