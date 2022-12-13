import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent implements OnInit {

  @Input() texto:any;

  viajes: any = [{
    id_viaje: '',
    id_usuario: '',
    hora_salida: '',
    asientos_disponibles: '',
    monto: '',
    sede_viaje: '',
    comunas_viaje: '',
  }]

  constructor(
    private api: ApiService,
    private bd: BdService,
    public toastController: ToastController,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {     
    this.bd.dbState().subscribe((res) => {
    if (res) {
      this.bd.fetchViaje().subscribe((item) => {
        this.viajes = item;
      })
    }
  })}

  editar(v) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: v.id_viaje,
        id_user: v.id_usuario,
        salida: v.hora_salida,
        asientos: v.asientos_disponibles,
        monto: v.monto,
        sede: v.sede_viaje,
        comuna: v.comunas_viaje
      }
    }
    this.router.navigate(['/editarviaje'], navigationExtras);
  }

  eliminar(v) {
    this.bd.eliminarViaje(v.id_viaje);
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado correctamente su viaje',
      duration: 1500
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Se ha editado correctamente su viaje',
      duration: 1500
    });
    toast.present();
  }


}
