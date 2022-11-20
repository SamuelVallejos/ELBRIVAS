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
    modelo: "",
    color: "",
    annio: ""
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
}