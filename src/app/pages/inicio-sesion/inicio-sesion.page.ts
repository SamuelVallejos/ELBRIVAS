import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  ionicForm: FormGroup;
  nombre: string = "";
  clave: string = "";
  inicio: boolean = false;
  isSubmitted = false;
  hide = true;

  usuario: any = [
    {
      id_usuario: "",
      nombre: "",
      clave: "",
      id_rol: "",
    }
  ]

  cliente: any = []

  constructor(
    private bd: BdService,
    private api: ApiService,
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public loading: LoadingController,
    public toastController: ToastController,
  ) {
    this.api.getPostsuser().subscribe((res) => {
      this.cliente = (res);
      console.log(res[0]);
    }, (error) => {
      console.log(error);
    });
  }

  entrar(): void {
    let navigationExtra: NavigationExtras = {
      state: {
        nombre: this.nombre,
        clave: this.clave
      }
    }

    for (let i = 0; i < this.usuario.length; i++) {
      if (this.nombre == this.usuario[i].nombre && this.clave == this.usuario[i].clave) {
        this.inicio = true;
        if (this.usuario[i].id_rol == 1) {
          this.router.navigate(['/home'], navigationExtra)
        }
        if (this.usuario[i].id_rol == 2) {
          this.router.navigate(['/misvehiculos'], navigationExtra)
        }
      }
      if (this.inicio == false) {}
    }
    this.inicio = false;
  }

  registrarUsuario() {
    for (let cliente of this.cliente) {
      this.bd.registrarUsuario(cliente.id_usuario, cliente.nombre, cliente.clave, cliente.id_rol)
    }
  }

  ngOnInit() {
    this.api.getPostsuser().subscribe((res) => {
      this.cliente = (res);
      this.registrarUsuario();
    }, (error) => {
      console.log(error);
    });
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUsuario().subscribe((item) => {
          this.usuario = item;
        })
      }
    })
  }
}
