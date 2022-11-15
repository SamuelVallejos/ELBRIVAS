import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculosComponent implements OnInit {
  @Input() auto: any;

  constructor( 
    private bdservicios: BdService,
    private router: Router,
    private alertController: AlertController
    ) { }


  ngOnInit() {}

}
