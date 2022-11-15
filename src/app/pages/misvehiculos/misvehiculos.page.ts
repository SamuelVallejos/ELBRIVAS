import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-misvehiculos',
  templateUrl: './misvehiculos.page.html',
  styleUrls: ['./misvehiculos.page.scss'],
})
export class MisvehiculosPage implements OnInit {
  @Input() automovil: any;

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