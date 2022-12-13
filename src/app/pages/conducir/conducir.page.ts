import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-conducir',
  templateUrl: './conducir.page.html',
  styleUrls: ['./conducir.page.scss'],
})
export class ConducirPage implements OnInit {
  @Input() automovil: any;

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
    public route: ActivatedRoute,
  ) {
    this.api.getPostsvehiculo().subscribe((res) => {
      this.automovil = res;
      console.log(res[0]);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchViaje().subscribe((item) => {
          this.viajes = item;
        })
      }
    })
  }

  eliminar(v) {
    this.bd.eliminarViaje(v.id_viaje);
    this.alerta()
  }

  editar(v) {
    let navigationExtras: NavigationExtras = {
      state: {
        salida: v.hora_salida,
        asientos: v.asientos_disponibles,
        monto: v.monto,
        sede: v.sede_viaje,
        comuna: v.comunas_viaje
      }
    }
    this.router.navigate(['/editarviaje'], navigationExtras);
  }

  async alerta() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado correctamente su viaje',
      position: "middle",
      duration: 1500
    });
    toast.present();
  }
}
