import { Router } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { Component, OnInit } from '@angular/core';


 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {

  
  constructor( 
    private service: UsuariosService,
    private router: Router,
    public displays : UsuariosService) { }
    public usuarios = [];
        

    mudarValor: boolean = true
    

 
  ngOnInit(): void {
     this.service.getDados().subscribe((data) => {
       this.usuarios = Array.from(Object.keys(data) , k=>data[k]);
      console.log(this.usuarios);  
    })
  }
  valorModal = true 

  
  openModal(): void {
   this.router.navigate(['/modal'])
  }
}