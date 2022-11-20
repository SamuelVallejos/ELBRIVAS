import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { BdService } from '../services/bd.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: any []= [{
    id: '',
    nombre: '',
    clave: '',
    id_rol: ''
  }]

  vehiculo: any []= [{
    patente: '',
    marca: '',
    id_usuario: '',
  }]

  constructor(
    private router: Router,
    private menu: MenuController,
    private bd: BdService,
    private api: ApiService
  ) {
    this.menu.enable(true);
    this.router.navigate(['home/viaje']);
  }

  ngOnInit() {
    this.api.getPostsuser().subscribe((res) => {
      this.usuario = res;
      //console.log(res)
      for (let u of this.usuario) {
        //this.servicioBD.presentAlert(x.nombre);
        this.bd.registrarUsuario(u.id, u.nombre, u.clave, u.id_rol);
      }
    });
    this.api.getPostsvehiculo().subscribe((res) => {
      this.vehiculo = res;
      for (let v of this.vehiculo) {
        this.bd.registrarVehiculo(v.patente, v.marca, v.id_usuario);
      }
    });
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  segmentChanged($event) {
    let direccion = $event.detail.value;
    //console.log(direccion);
    this.router.navigate(['home/' + direccion]);
  }

}
export class BadgeOverviewExample {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


} 