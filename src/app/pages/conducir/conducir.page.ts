import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-conducir',
  templateUrl: './conducir.page.html',
  styleUrls: ['./conducir.page.scss'],
})
export class ConducirPage implements OnInit {
  @Input() automovil: any;
  registroAuto: any = [
    {
      MarcaVehiculo: 'Toyota',
      ModeloVehiculo: 'Tercel',
      Patente: 'FR-YQ-23',
      ColorVehiculo: 'Gris',
    }
  ]

  constructor(private api: ApiService) {
    this.api.getPostsvehiculo().subscribe((res) => {
      this.automovil = res;
      console.log(res[0]);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
