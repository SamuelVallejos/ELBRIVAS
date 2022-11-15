import { Component, Input, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any = [{
    id: '',
    nombre: '',
    correo: '',
    contrasena: '',
    telefono: '',
    id_rol: ''
  }]

  constructor(private DBC: BdService) {
  }

  ngOnInit() {

    this.DBC.dbState().subscribe((res) => {
      if (res) {
        this.DBC.fetchUsuario().subscribe((item) => {
          this.usuario = item
        })
      }
    });
  }
}
