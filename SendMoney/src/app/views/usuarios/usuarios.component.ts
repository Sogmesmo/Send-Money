import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [
  {
    "id": "1",
    "nome": "Geice",
    "idade": 25
  },
  {
    "id": "2",
    "nome": "debora",
    "idade": 23
  },
  {
    "id": "3",
    "nome": "Marilda",
    "idade": 55
  },
  {
    "id": "4",
    "nome": "Jane",
    "idade": 30
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
