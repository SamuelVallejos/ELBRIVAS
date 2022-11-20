import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  
  autos: any = [
    {
      Chofer: 'JUAN CARLOS',
      MarcaVehiculo: 'TOYOTA',
      ModeloVehiculo: 'TERCEL',
      Patente: 'FR-YQ-23',
      ColorVehiculo: 'NEGRO',
      Destino: 'COLINA',
      Asientos: 1,
      Tarifa: 1100
    }
  ]

  constructor(private router: Router) {
  }

 
  ViajeClick() {
    this.router.navigate(['home/viaje']);
  }
  ngOnInit() {
  }
}