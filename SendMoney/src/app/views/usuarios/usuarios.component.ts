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
    "nome": "Geice Gomes",
    "user": '@Geice'
  },
  {
    "id": "2",
    "nome": "Debora Souto",
    "user": '@Debora'
  },
  {
    "id": "3",
    "nome": "Marilda Silva",
    "user": '@Marilda'
  },
  {
    "id": "4",
    "nome": "Jane Castro",
    "user": '@Jane'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
