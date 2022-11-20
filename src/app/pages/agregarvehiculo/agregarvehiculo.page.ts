import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-agregarvehiculo',
  templateUrl: './agregarvehiculo.page.html',
  styleUrls: ['./agregarvehiculo.page.scss'],
})
export class AgregarvehiculoPage implements OnInit {

  patente: "";
  marca: "";
  id_usuario: "";

  FormularioNewCar: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public loading: LoadingController,
    private bd: BdService
  ) { }

  ngOnInit() {
    this.FormularioNewCar = this.formBuilder.group({
      patente: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]],
      marca: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      modelo: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(20)]],
      ano: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[1-9]/)]],
      color: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]],
    })
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Vehiculo Agregado',
      message: 'Tu vehiculo se a agregado!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.FormularioNewCar.valid) {
      console.log(this.FormularioNewCar.value)
      this.bd.registrarVehiculo(this.patente, this.marca, this.id_usuario);
      this.bd.presentAlert("Usuario Registrada");
      this.router.navigate(['/misvehiculos'])
    } else {
      console.log('Datos incompletos, porfavor de llenarlos correctamente')
      return false;
    }
  }
}