import { Router } from '@angular/router';
import { UsuariosService } from './../../usuarios/usuarios.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {  

  /*usuarioselecionado: any;*/
  dadoscard: any;

  cards:any = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  constructor(
     private service: UsuariosService,
     private router: Router) {  }
 
  ngOnInit(): void {   
    /*this.usuarioselecionado = this.display.getUsuarioSelecionado()
    console.log(this.usuarioselecionado)*/
  }

  sendpay(){
    console.log(this.dadoscard)
    this.service.addpay(this.dadoscard).subscribe(() => { this.service.showMessage("O pagamento foi concluido com sucesso!")
    this.router.navigate(['/usuarios'])
  });  
  }
}
