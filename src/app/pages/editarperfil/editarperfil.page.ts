import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { CameraResultType, Camera, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { BdService } from 'src/app/services/bd.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  selectedImage: any;
  usuarios: any;
  image: any = [{
    dataUrl: ''
  }]

  constructor(
    private fotoService: PhotoService,
    private nativeStorage: NativeStorage,
    private dataBaseService: BdService,
    private api: ApiService,
    private router: Router,
    private alertController: AlertController
  ) {

    this.api.getPostsuser().subscribe((res) => {
      this.usuarios = (res);
    }, (error) => {
      console.log(error);
    });
  }
  
  imagentomada: any;

  // la foto se guarda en el data

  VerificarWEB() {
    if (Capacitor.getPlatform() == 'web') return true;
    return false;
  }

  async TomarFoto() {
    const image = await Camera.getPhoto({
      quality: 80,
      source: CameraSource.Prompt,
      width: 512, height: 512,
      saveToGallery: true,
      resultType: this.VerificarWEB() ? CameraResultType.DataUrl : CameraResultType.Uri,
      correctOrientation: true
    });
    console.log('imagen: ', image);
    this.imagentomada = image;
    if (this.VerificarWEB()) this.imagentomada.webPath = image.dataUrl;

    this.nativeStorage.setItem('foto', { property: this.image.dataUrl })
      .then(
        () => alert('Foto Guardada'),
        error => alert('Error al guardar la foto')
      )
    this.nativeStorage.getItem('foto').then((data) => {
      this.presentAlert(data);
    })

  };

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Perfil Editado',
      message: 'Tu perfil se a editado correctamente!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  obtenerfoto() {
    this.nativeStorage.getItem('foto').then((data) => {
      this.presentAlert(data);
    })
  }

  ngOnInit() {
  }
}

