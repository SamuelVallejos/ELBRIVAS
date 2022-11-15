import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  datos: any;


  constructor(private dataBaseService: BdService, private api: ApiService) {
    this.api.getPostsuser().subscribe((res) => {
      this.datos = (res);
    }, (error) => {
      console.log(error);
    });

  }

  email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Tienes que ingresar tu correo';
    }
    return this.email.hasError('email') ? 'Correo no valido' : '';
  }

  ngOnInit() {
  }

}