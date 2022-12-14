import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-viajec',
  templateUrl: './viajec.component.html',
  styleUrls: ['./viajec.component.scss'],
})
  export class ViajecComponent implements OnInit {

  @Input() texto:any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private bd: BdService){
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Asiento reservado',
      buttons: ['Confirmar']
    });

    await alert.present();
  }
  
  async A() {
    this.router.navigate(['/viajeextra']);
  }

  ngOnInit() {}
}