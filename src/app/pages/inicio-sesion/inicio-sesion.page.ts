import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  credentials: FormGroup;


  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private dataBaseService: BdService,
    private api: ApiService
  ) {

    // this.api.getPostsuser().subscribe((res) => {
    //   this.credentials = (res);
    // }, (error) => {
    //   console.log(error);
    // });
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'Tienes que ingresar tu correo';
  //   }
  //   return this.email.hasError('email') ? 'Correo no valido' : '';
  // }

  ngOnInit() {
    this.credentials = this.fb.group({
      nombre: ['v.rosendo5', [Validators.required]],
      clave: ['J.12mm6', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl('/viaje', { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Datos Incorrectos',
					message: res.error.error,
          buttons: ['OK']
        });

        await alert.present();
      }
    );
  }
  get nombre() {
    return this.credentials.get('nombre');
  }

  get clave() {
    return this.credentials.get('clave');
  }
}