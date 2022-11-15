import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rcontrasena',
  templateUrl: './rcontrasena.page.html',
  styleUrls: ['./rcontrasena.page.scss'],
})
export class RcontrasenaPage implements OnInit {

  constructor(private alertController: AlertController) { }
  
  email = new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Tienes que ingresar tu correo';
    }
  return this.email.hasError('email') ? 'Correo no valido' : '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Se a enviado un mensaje con las instruciones que debe seguir',
      buttons: ['Confirmar'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
