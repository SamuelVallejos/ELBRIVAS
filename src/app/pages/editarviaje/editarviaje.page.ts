import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-editarviaje',
  templateUrl: './editarviaje.page.html',
  styleUrls: ['./editarviaje.page.scss'],
})
export class EditarviajePage implements OnInit {

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
  asientos_disponibles: "";
  hora_salida: "";
  monto: "";

  EditarViaje: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public toastController: ToastController,
    public alertController: AlertController,
    public loading: LoadingController,
    private bd: BdService) { }


  ngOnInit() {
    this.EditarViaje = this.formBuilder.group({
      sede_viaje: ['', [Validators.required]],
      comunas_viaje: ['', [Validators.required]],
      asientos: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern(/^[1-8]/)]],
      horaSalida: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[1-9]\d{1,4}$/)]],
      tarifa: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(5), Validators.pattern(/^[1-9]\d{1,5}$/)]],
    })
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.EditarViaje.valid) {
      console.log(this.EditarViaje.value)
      this.bd.registrarViaje(this.sede_viaje, this.comunas_viaje, this.asientos_disponibles, this.hora_salida, this.monto);
      this.presentToast()
      this.router.navigate(['/home'])
    } else {
      this.presentToast2()
      return false;
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha agregado correctamente su viaje',
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
}
