import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

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
    public loading: LoadingController) { }
    
  c1 = this.ngOnInit;

  ngOnInit() {
    this.FormularioUsuario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]+$')]],
      correo: ['', [Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      contrasena2: ['', [Validators.required]],
    },{
      // Validators: this.MustMatch('contrasena', 'contrasena2')
    })
  }

  get f() {
    return this.FormularioUsuario.controls;
  }

  MustMatch(controlName: string, matchingControlName:string){
    return(formGroup:FormGroup)=>{
      
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return
      }
      if(control.value !== matchingControl.value){
      //  matchingControl.setErrors({MustMatch=true});
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }


  submitForm() {
    this.isSubmitted = true;
    if (this.FormularioUsuario.valid) {
      console.log(this.FormularioUsuario.value)
      this.router.navigate(['/inicio-sesion'])
    } else {
      console.log('Datos incompletos, porfavor de llenarlos correctamente')
      return false;
    }
  }
}