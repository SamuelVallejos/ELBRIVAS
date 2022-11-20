import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  FormularioUsuario: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public loading: LoadingController,
    private bd : BdService
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

  submitForm() {
    this.isSubmitted = true;
    if (this.FormularioUsuario.valid) {
      console.log(this.FormularioUsuario.value)
      this.router.navigate(['/home'])
    } else {
      console.log('Datos incompletos, porfavor de llenarlos correctamente')
      return false;
    }
  }
}