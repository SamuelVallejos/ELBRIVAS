import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  sedes: any = [
    {
      sede: 'Sede Alameda'
    }, {
      sede: 'Sede Antonio Varas'
    }, {
      sede: 'Sede Educación Continua'
    }, {
      sede: 'Sede Maipú'
    }, {
      sede: 'Sede Melipilla'
    }, {
      sede: 'Sede Padre Alonso de Ovalle'
    }, {
      sede: 'Sede Plaza Norte'
    }, {
      sede: 'Sede Plaza Oeste'
    }, {
      sede: 'Sede Plaza Vespucio'
    }, {
      sede: 'Sede Punete Alto'
    }, {
      sede: 'Sede San Bernardo'
    }, {
      sede: 'Sede San Carlos de Apoquindo'
    }, {
      sede: 'Sede San Joaquín'
    }
  ]

  comunas: any = [
    {
      comuna: 'Colina'
    }, {
      comuna: 'Quilicura'
    }, {
      comuna: 'Til Til'
    }, {
      comuna: 'La Montaña'
    }, {
      comuna: 'Conchali'
    }, {
      comuna: 'Independencia'
    }, {
      comuna: 'Renca'
    }, {
      comuna: 'Las Condes'
    }, {
      comuna: 'Lo barnechea'
    }, {
      comuna: 'Vitacura'
    }
  ]

  FormularioViaje: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public loading: LoadingController) { }
    

  ngOnInit() {
    this.FormularioViaje = this.formBuilder.group({
      asientos: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(1), Validators.pattern(/^[1-8]/) ]],
      horaSalida: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(4), Validators.pattern(/^[1-9]\d{1,4}$/) ]],
      tarifa: ['', [Validators.required, Validators.minLength(0),Validators.maxLength(5), Validators.pattern(/^[1-9]\d{1,5}$/) ]],
    })
  }
  asdasdsadasd = "";
  submitForm() {
    this.isSubmitted = true;
    if (this.FormularioViaje.valid) {
      console.log(this.FormularioViaje.value)
      this.router.navigate(['/home'])
    } else {
      console.log('Datos incompletos, porfavor de llenarlos correctamente')
      return false;
    }
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Viaje Creado',
      message: 'Tu viaje se a creado correctamente',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
