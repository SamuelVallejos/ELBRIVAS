import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: "";
  clave: "";
  id_usuario: "";
  id_rol: "";


  FormularioUsuario: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public toastController: ToastController,
    public alertController: AlertController,
    public loading: LoadingController,
    private bd: BdService
  ) { }

  static confirmPassword(control: FormControl, group: FormGroup, matchPassword: string) {

    return new Promise(resolve => {

      if (!control.value && group.controls[matchPassword].value !== null || group.controls[matchPassword].value === control.value) {
        group.controls['contrasena2'].setErrors(null)
        resolve(null)
      } else {
        group.controls['contrasena2'].setErrors({ 'mustMatch': true })
        if (matchPassword == 'contrasena') {
          resolve({ 'mustMatch': true })
        } else {
          resolve(null)
        }
      }
    })
  }

  c1 = this.ngOnInit;

  ngOnInit() {
    this.FormularioUsuario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      contrasena: ['', ([Validators.required, Validators.minLength(8)]), (control => RegistroPage.confirmPassword(control, this.FormularioUsuario, 'contrasena2'))],
      contrasena2: ['', ([Validators.required, Validators.minLength(8)]), (control => RegistroPage.confirmPassword(control, this.FormularioUsuario, 'contrasena'))],
    }, {
      updateOn: "blur"
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Felicitaciones, bienvenido a DRIVOLO',
      duration: 1500
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Datos incompletos, porfavor de llenarlos correctamente',
      duration: 1500
    });
    toast.present();
  }


  submitForm() {
    this.isSubmitted = true;
    if (this.FormularioUsuario.valid) {
      console.log(this.FormularioUsuario.value)
      this.bd.registrarUsuario(this.nombre, this.clave, this.id_usuario, this.id_rol);
      this.presentToast()
      this.router.navigate(['/home'])
    } else {
      this.presentToast2()
      return false;
    }
  }
}