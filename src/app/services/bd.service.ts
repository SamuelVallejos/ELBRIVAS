import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { usuario } from './usuario';
import { Vehiculo } from './vehiculo';
import { Viaje } from './viaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // Create Table
  usuarioD: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement,nombre VARCHAR(100),clave varchar(16),id_rol INTEGER);"
  autoD: string = "CREATE TABLE IF NOT EXISTS vehiculo(patente NUMBER PRIMARY KEY,marca VARCHAR(20) NOT NULL, id_usuario VARCHAR(20));"
  viajeD: string = "CREATE TABLE IF NOT EXISTS viaje(id_viaje INTEGER PRIMARY KEY autoincrement,hora_salida VARCHAR(6), asientos_disponibles number, monto NUMBER, sede_viaje VARCHAR(30), comunas_viaje VARCHAR(30));"

  // intos
  intoViaje: string = "INSERT or IGNORE INTO viaje(id_viaje, hora_salida, asientos_disponibles, monto, sede_viaje, comunas_viaje) VALUES (3,1300,4,1000,Plaza Norte,Colina);"

  public database: SQLiteObject;

  listaUsuario = new BehaviorSubject([]);
  listaVehiculo = new BehaviorSubject([]);
  listaViaje = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private alertController: AlertController,
    private http: HttpClient
  ) {
    this.crearBD();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'bdusuario347.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //llamar a la funcion para crear las tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Error creación BD: " + e);
      })
    })
  }

  async crearTablas() {
    try {
      //ejecuto creacion de tablas
      await this.database.executeSql(this.usuarioD, []);
      await this.database.executeSql(this.autoD, []);
      await this.database.executeSql(this.viajeD, []);

      //llamo al observable de carga de datos
      this.buscarUsuario();
      this.buscarVehiculo();
      this.buscarViaje();

      //modificar el observable de el status de la BD
      this.isDBReady.next(true);

    } catch (e) {
      this.presentAlert("Error en la creación de la BD: " + e);
    }
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  // Usuario
  fetchUsuario(): Observable<usuario[]> {
    return this.listaUsuario.asObservable();
  }

  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            id_rol: res.rows.item(i).id_rol
          })
        }
      }
      this.listaUsuario.next(items);
    })
  }

  registrarUsuario(id_usuario, nombre, clave, id_rol) {
    let data = [id_usuario, nombre, clave, id_rol];
    return this.database.executeSql('INSERT INTO usuario(id_usuario, nombre, clave, id_rol) VALUES (?,?,?,?)', data).then(data2 => {
      this.buscarUsuario();
      // this.presentAlert("Registro del Usuario Realizado");
    })
  }

  // modificarUsuario(id) {
  //   let data = [id];
  //   return this.database.executeSql('UPDATE usuario SET telefono = ? WHERE id_usuario = ?', data).then(data2 => {
  //     this.buscarUsuario();
  //     // this.presentAlert("Usuario Modificado");
  //   })
  // }

  eliminarUsuario(id) {
    return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?', [id]).then(data2 => {
      this.buscarUsuario();
      // this.presentAlert("Usuario Eliminado");
    })
  }

  // vehiculo

  fetchVehiculo(): Observable<Vehiculo[]> {
    return this.listaVehiculo.asObservable();
  }

  buscarVehiculo() {
    return this.database.executeSql('SELECT * FROM vehiculo', []).then(res => {
      let items: Vehiculo[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            patente: res.rows.item(i).patente,
            marca: res.rows.item(i).marca,
            id: res.rows.item(i).id_usuario
          })
        }
      }
      this.listaVehiculo.next(items);
    })
  }

  registrarVehiculo(patente, marca, id_usuario) {
    let data = [patente, marca, id_usuario];
    return this.database.executeSql('INSERT INTO vehiculo(patente,marca,id_usuario) VALUES (?,?,?)', data).then(data2 => {
      this.buscarVehiculo();
      // this.presentAlert("Registro del Vehiculo Realizado");
    })
  }

  eliminarVehiculo(patente) {
    return this.database.executeSql('DELETE FROM vehiculo WHERE patente = ?', [patente]).then(data2 => {
      this.buscarVehiculo();
      // this.presentAlert("Vehiculo Eliminado");
    })
  }

  // viaje

  fetchViaje(): Observable<Viaje[]> {
    return this.listaVehiculo.asObservable();
  }

  buscarViaje() {
    return this.database.executeSql('SELECT * FROM viaje', []).then(res => {
      let items: Viaje[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            asientos_disponibles: res.rows.item(i).asientos_disponibles,
            monto: res.rows.item(i).monto,
            sede_viaje: res.rows.item(i).sede,
            comunas_viaje: res.rows.item(i).comunas
          })
        }
      }
      this.listaViaje.next(items);

    })
  }

  registrarViaje(hora_salida, asientos_disponibles, monto, sede_viaje, comunas_viaje) {
    let data = [hora_salida, asientos_disponibles, monto, sede_viaje, comunas_viaje];
    return this.database.executeSql('INSERT INTO viaje (hora_salida, asientos_disponibles, monto, sede_viaje, comunas_viaje) VALUES (?,?,?,?,?)', data).then(data2 => {
      this.buscarViaje();
      // this.presentAlert("Registro del Viaje Realizado");
    })
  }

  modificarViaje(hora_salida, asientos_disponibles, monto, comunas_viaje) {
    let data = [hora_salida, asientos_disponibles, monto, comunas_viaje];
    return this.database.executeSql('UPDATE viaje SET hora_salida = ?, asientos_disponibles = ?, monto = ?,  comunas_viaje= ? WHERE id_viaje = ?', data).then(data2 => {
      this.buscarViaje();
      // this.presentAlert("Viaje Modificado");
    })
  }

  eliminarViaje(id) {
    return this.database.executeSql('DELETE FROM viaje WHERE id_viaje = ?', [id]).then(data2 => {
      this.buscarViaje();
      // this.presentAlert("Viaje Eliminado");
    })
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }
}