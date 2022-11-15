import { Component } from '@angular/core';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menu: MenuController, 
    public alertController: AlertController,
    public loading: LoadingController
    ) {
    this.menu.enable(false);
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Sesión Cerrada',
      message: 'Tu sesión se a cerrado correctamente!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}