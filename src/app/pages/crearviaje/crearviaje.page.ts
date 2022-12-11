import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

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

  sede_viaje: "";
  comunas_viaje: "";
  asientos: "";
  horaSalida: "";
  tarifa: "";

  FormularioViaje: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public loading: LoadingController,
    private bd: BdService) { }


  ngOnInit() {
    this.FormularioViaje = this.formBuilder.group({
      sede_viaje: ['', [Validators.required]],
      comunas_viaje: ['', [Validators.required]],
      asientos: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern(/^[1-8]/)]],
      horaSalida: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[1-9]\d{1,4}$/)]],
      tarifa: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(5), Validators.pattern(/^[1-9]\d{1,5}$/)]],
    })
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.FormularioViaje.valid) {
      console.log(this.FormularioViaje.value)
      this.bd.registrarViaje(this.sede_viaje, this.comunas_viaje, this.asientos, this.horaSalida, this.tarifa);
      this.bd.presentAlert("Usuario Registrada");
      this.router.navigate(['/misvehiculos'])
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
