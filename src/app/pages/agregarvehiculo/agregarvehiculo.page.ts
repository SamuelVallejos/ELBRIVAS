import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController,ToastController } from '@ionic/angular';
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
    public toastController: ToastController,
    public alertController: AlertController,
    public loading: LoadingController,
    private bd: BdService
  ) { }

  ngOnInit() {
    this.FormularioNewCar = this.formBuilder.group({
      patente: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]],
      marca: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha agregado correctamente su vehiculo',
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
    if (this.FormularioNewCar.valid) {
      console.log(this.FormularioNewCar.value)
      this.bd.registrarVehiculo(this.patente, this.marca, this.id_usuario);
      this.presentToast()
      this.router.navigate(['/misvehiculos'])
    } else {
      this.presentToast2()
      return false;
    }
  }
}