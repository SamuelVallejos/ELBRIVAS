import { Component, Input, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-misvehiculos',
  templateUrl: './misvehiculos.page.html',
  styleUrls: ['./misvehiculos.page.scss'],
})
export class MisvehiculosPage implements OnInit {

  misVehiculos: any = [{
    patente: "",
    marca: "",
    id_usuario: ""
  }]

  constructor(
    private bd: BdService
  ) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchVehiculo().subscribe((item) => {
          this.misVehiculos = item;
        })
      }
    })
  }

  eliminar(v) {
    this.bd.eliminarVehiculo(v.patente);
    this.bd.presentAlert("Vehiculo Eliminado");
  }
}