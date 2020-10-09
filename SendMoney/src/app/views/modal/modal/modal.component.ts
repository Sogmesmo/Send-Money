import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {  

  showDisplay:boolean
  usuarioselecionado : any ;
 
  constructor(
    public displays: UsuariosService ) {  }
  
  valorModal = false  
  closeModal(){
    this.valorModal = this.valorModal
    this.displays.mudarValor(this.valorModal, 
    this.displays.getUsuarioSelecionado()
    )}
  ngOnInit(): void {    
    this.usuarioselecionado = this.displays.getUsuarioSelecionado()
    console.log(this.usuarioselecionado)    
    this.displays.showModal.subscribe((valor) => {
      this.showDisplay = valor
    })
    
  }
}
